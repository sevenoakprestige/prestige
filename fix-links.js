const fs = require('fs');
const path = require('path');

const dirs = ['./src', './articles'];
const routes = [
    'uk-company-formation',
    'uk-company-formation-for-non-residents',
    'uk-company-formation-non-residents',
    'registered-office-service',
    'director-service-address',
    'virtual-business-address',
    'vat-registration-uk',
    'eori-registration-uk',
    'fintech-banking-guidance',
    'companies-house-verification'
];

function processDir(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const route of routes) {
                const regex = new RegExp(`href=(["'])/${route}(["'#])|href:\\s*(["'])/${route}(["'#])`, 'g');
                content = content.replace(regex, (match, p1, p2, p3, p4) => {
                    if (p1) return `href=${p1}/services/${route}${p2}`;
                    if (p3) return `href: ${p3}/services/${route}${p4}`;
                });
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        } else if (fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const route of routes) {
                const regex = new RegExp(`\\]\\(/${route}\\)`, 'g');
                content = content.replace(regex, `](/services/${route})`);
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated markdown file ${fullPath}`);
            }
        }
    }
}

for (const dir of dirs) {
    processDir(dir);
}

