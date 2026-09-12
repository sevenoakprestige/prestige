const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/app/countries/france/uk-company-formation/page.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Fix imports
content = content.replace(/import \{ createFileRoute, Link \} from "@tanstack\/react-router";/, 'import Link from "next/link";\nimport Image from "next/image";\nimport { Metadata } from "next";');
content = content.replace(/import { SiteNav } from "@\/components\/landing\/SiteNav";\n/, '');
content = content.replace(/import { SiteFooter } from "@\/components\/landing\/SiteFooter";\n/, '');
content = content.replace(/import { StickyCta } from "@\/components\/landing\/StickyCta";\n/, '');
content = content.replace(/import { NameCheck } from "@\/components\/landing\/NameCheck";\n/, 'import CompanyChecker from "@/components/CompanyChecker";\n');
content = content.replace(/import { ReviewsFr } from "@\/components\/landing\/ReviewsFr";\n/, 'import ReviewsFr from "@/components/ReviewsFr";\n');

// 2. Remove asset imports and replace them with static paths later
content = content.replace(/import heroImage from "@\/assets\/france-advisory.jpg";\n/, '');
content = content.replace(/import institutionImage from "@\/assets\/institution.jpg";\n/, '');
content = content.replace(/import documentsImage from "@\/assets\/documents.jpg";\n/, '');
content = content.replace(/import advisoryImage from "@\/assets\/advisory-team.jpg";\n/, '');

// 3. Extract Metadata
content = content.replace(/export const Route = createFileRoute[^\)]+\)\(\{[\s\S]*?component: RouteComponent,\n\}\);\n\n/, '');
content = content.replace(/const TITLE = "([^"]+)";\nconst DESCRIPTION =\n\s*"([^"]+)";\n/, 'export const metadata: Metadata = {\n  title: "$1",\n  description: "$2",\n};\n');

// 4. Change function name to default export
content = content.replace(/function RouteComponent\(\) \{/, 'export default function FrancePage() {');

// 5. Remove SiteNav and SiteFooter and StickyCta
content = content.replace(/<SiteNav \/>\n/, '');
content = content.replace(/<SiteFooter \/>\n/, '');
content = content.replace(/<StickyCta [^>]+ \/>\n/, '');

// 6. Replace img tags with Image component or static string
content = content.replace(/src=\{heroImage\}/g, 'src="/assets/france-advisory.jpg"');
content = content.replace(/src=\{institutionImage\}/g, 'src="/assets/institution.jpg"');
content = content.replace(/src=\{documentsImage\}/g, 'src="/assets/documents.jpg"');
content = content.replace(/src=\{advisoryImage\}/g, 'src="/assets/advisory-team.jpg"');

// 7. Replace NameCheck with CompanyChecker
content = content.replace(/<NameCheck [^>]*\/>/, '<CompanyChecker />');

// 8. Replace `to=` with `href=` in Links
content = content.replace(/<Link ([^>]*)to=/g, '<Link $1href=');
content = content.replace(/ hash="([^"]+)"/g, ''); // Next.js uses href="/countries#tarifs"

fs.writeFileSync(file, content);
console.log('File adapted successfully');
