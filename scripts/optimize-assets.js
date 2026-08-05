import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const IMAGES_BACKUP_DIR = path.join(__dirname, '../src/assets/images-backup');
const VIDEOS_DIR = path.join(__dirname, '../src/assets/videos');
const VIDEOS_BACKUP_DIR = path.join(__dirname, '../src/assets/videos-backup');

function getAllFilesRecursively(dir, extensions) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    for (const item of list) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(getAllFilesRecursively(fullPath, extensions));
        } else {
            const ext = path.extname(item).toLowerCase();
            if (extensions.includes(ext)) {
                results.push(fullPath);
            }
        }
    }
    return results;
}

async function optimizeVideos() {
    console.log('\n--- OPTIMIZING VIDEOS ---');
    if (!fs.existsSync(VIDEOS_DIR)) {
        console.log('No videos directory found.');
        return;
    }
    if (!fs.existsSync(VIDEOS_BACKUP_DIR)) {
        fs.mkdirSync(VIDEOS_BACKUP_DIR, { recursive: true });
        console.log(`Created video backup directory at: ${VIDEOS_BACKUP_DIR}`);
    }
    const videos = getAllFilesRecursively(VIDEOS_DIR, ['.mp4', '.webm', '.mov']);
    for (const videoPath of videos) {
        const name = path.basename(videoPath);
        const relPath = path.relative(VIDEOS_DIR, videoPath);
        const backupPath = path.join(VIDEOS_BACKUP_DIR, relPath);
        
        console.log(`Processing video: ${relPath}`);
        
        if (!fs.existsSync(backupPath)) {
            fs.mkdirSync(path.dirname(backupPath), { recursive: true });
            fs.copyFileSync(videoPath, backupPath);
            console.log(`  Backed up original to: ${backupPath}`);
        } else {
            console.log(`  Backup already exists at: ${backupPath}`);
        }
        
        const backupStat = fs.statSync(backupPath);
        console.log(`  Original size: ${(backupStat.size / (1024 * 1024)).toFixed(2)} MB`);
        
        try {
            const cmd = `"${ffmpegPath}" -i "${backupPath}" -vcodec libx264 -crf 28 -preset fast -y "${videoPath}"`;
            console.log(`  Running ffmpeg command...`);
            execSync(cmd, { stdio: 'ignore' });
            
            const newStat = fs.statSync(videoPath);
            const savings = ((1 - (newStat.size / backupStat.size)) * 100).toFixed(1);
            console.log(`  Compressed size: ${(newStat.size / (1024 * 1024)).toFixed(2)} MB (${savings}% reduction)`);
        } catch (e) {
            console.error(`  Error compressing ${name}:`, e);
        }
    }
}

async function optimizeSvgs() {
    console.log('\n--- OPTIMIZING SVGS TO WEBP ---');
    if (!fs.existsSync(IMAGES_DIR)) {
        console.log('No images directory found.');
        return;
    }
    if (!fs.existsSync(IMAGES_BACKUP_DIR)) {
        fs.mkdirSync(IMAGES_BACKUP_DIR, { recursive: true });
        console.log(`Created image backup directory at: ${IMAGES_BACKUP_DIR}`);
    }
    
    const svgs = getAllFilesRecursively(IMAGES_DIR, ['.svg']);
    console.log(`Found ${svgs.length} SVG files to optimize.`);
    
    for (const svgPathFile of svgs) {
        const name = path.basename(svgPathFile);
        const relPath = path.relative(IMAGES_DIR, svgPathFile);
        const backupPath = path.join(IMAGES_BACKUP_DIR, relPath);
        
        console.log(`Processing SVG: ${relPath}`);
        
        if (!fs.existsSync(backupPath)) {
            fs.mkdirSync(path.dirname(backupPath), { recursive: true });
            fs.copyFileSync(svgPathFile, backupPath);
            console.log(`  Backed up original SVG to: ${backupPath}`);
        } else {
            console.log(`  Backup already exists at: ${backupPath}`);
        }
        
        const backupStat = fs.statSync(backupPath);
        
        const dirName = path.dirname(svgPathFile);
        const baseName = path.basename(svgPathFile, '.svg');
        const webpPath = path.join(dirName, `${baseName}.webp`);
        
        try {
            console.log(`  Converting SVG to WebP using sharp...`);
            await sharp(backupPath)
                .webp({ quality: 85 })
                .toFile(webpPath);
                
            const newStat = fs.statSync(webpPath);
            const savings = ((1 - (newStat.size / backupStat.size)) * 100).toFixed(1);
            console.log(`  Generated WebP: ${baseName}.webp -> Size: ${(newStat.size / 1024).toFixed(1)} KB (${savings}% reduction from SVG)`);
            
            fs.unlinkSync(svgPathFile);
            console.log(`  Removed original SVG from target folder: ${relPath}`);
        } catch (e) {
            console.error(`  Error converting ${name} to WebP:`, e);
        }
    }
}

async function run() {
    await optimizeVideos();
    await optimizeSvgs();
    console.log('\nAsset optimization complete!');
}

run();
