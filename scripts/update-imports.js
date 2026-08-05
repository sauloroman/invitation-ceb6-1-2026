import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');

const REPLACEMENTS = [
    { from: "sello.svg", to: "sello.webp" },
    { from: "logo.svg", to: "logo.webp" },
    { from: "marco.svg", to: "marco.webp" },
    { from: "megafono.svg", to: "megafono.webp" },
    { from: "tendido-2.svg", to: "tendido-2.webp" },
    { from: "sillas.svg", to: "sillas.webp" },
    { from: "copas.svg", to: "copas.webp" },
    { from: "dress-code.svg", to: "dress-code.webp" },
    { from: "macetero.svg", to: "macetero.webp" },
    { from: "table.svg", to: "table.webp" },
    { from: "colgantes.svg", to: "colgantes.webp" },
    { from: "jarron.svg", to: "jarron.webp" }
];

function updateImportsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const rep of REPLACEMENTS) {
        // Create regex to match imports like:
        // import ... from '@/assets/images/icons/sello.svg'
        // import ... from "../assets/images/icons/sello.svg"
        const regex = new RegExp(`(['"])([^'"]+/${rep.from})(['"])`, 'g');
        if (regex.test(content)) {
            content = content.replace(regex, (match, p1, p2, p3) => {
                const newPath = p2.replace(rep.from, rep.to);
                return `${p1}${newPath}${p3}`;
            });
            modified = true;
            console.log(`  Replaced ${rep.from} -> ${rep.to} in ${path.basename(filePath)}`);
        }
    }
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

function processDirectory(dir) {
    const list = fs.readdirSync(dir);
    for (const item of list) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (['.tsx', '.ts', '.js', '.jsx'].includes(path.extname(item).toLowerCase())) {
            updateImportsInFile(fullPath);
        }
    }
}

console.log('Updating imports in source files from .svg to .webp...');
processDirectory(SRC_DIR);
console.log('Update complete!');
