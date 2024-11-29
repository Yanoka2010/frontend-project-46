import path from 'node:path';
import fs from 'node:fs'

export default function parseFile(filepath) {
    const absPath = path.resolve(filepath);
    const fileData = fs.readFileSync(absPath, 'utf-8');
    const data = JSON.parse(fileData);
    return data;
}