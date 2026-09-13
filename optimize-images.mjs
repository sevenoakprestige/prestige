/**
 * Image optimization script using sharp (already installed by Next.js)
 * Converts large JPG/PNG/JPEG images to WebP and reports savings.
 * Run with: node optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, 'public');

const CONVERTIBLE_EXTS = ['.jpg', '.jpeg', '.png'];
const SKIP_PATTERNS = [
    /logo/i, /\.svg$/i, /favicon/i, /worldfirst/i,
    // Skip already-optimized small files < 50KB (checked later)
];

async function* walkDir(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) {
            yield* walkDir(path);
        } else {
            yield path;
        }
    }
}

async function optimize() {
    const results = [];
    let totalSaved = 0;

    for await (const filePath of walkDir(PUBLIC_DIR)) {
        const ext = extname(filePath).toLowerCase();
        if (!CONVERTIBLE_EXTS.includes(ext)) continue;

        // Skip files matching skip patterns
        if (SKIP_PATTERNS.some(p => p.test(filePath))) continue;

        const stats = await stat(filePath);
        const originalSize = stats.size;

        // Skip files under 50KB (already small enough)
        if (originalSize < 50 * 1024) {
            console.log(`⏭  Skipping (small): ${basename(filePath)} (${(originalSize / 1024).toFixed(0)}KB)`);
            continue;
        }

        const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

        try {
            const sharpInstance = sharp(filePath);
            const metadata = await sharpInstance.metadata();

            // Use quality 82 — excellent visual quality, ~60-70% smaller than JPEG
            await sharpInstance
                .webp({ quality: 82, effort: 5 })
                .toFile(outputPath);

            const newStats = await stat(outputPath);
            const newSize = newStats.size;
            const saved = originalSize - newSize;
            const pct = ((saved / originalSize) * 100).toFixed(1);

            totalSaved += saved;
            results.push({ file: basename(filePath), originalSize, newSize, saved, pct, outputPath, originalPath: filePath });
            console.log(`✅ ${basename(filePath)} → .webp  ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB  (-${pct}%)`);
        } catch (err) {
            console.error(`❌ Failed: ${basename(filePath)}: ${err.message}`);
        }
    }

    console.log('\n──────────────────────────────────────────────────');
    console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB across ${results.length} files`);
    console.log('\nFiles to update in code (original → webp):');
    results.forEach(r => {
        const rel = r.originalPath.replace(join(__dirname, 'public'), '');
        console.log(`  ${rel}  →  ${rel.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`);
    });

    return results;
}

optimize().catch(console.error);
