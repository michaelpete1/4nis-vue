// debug.js - ES Modules version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory (ES modules equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("=== DIRECTORY LISTING ===");

function listDir(dir) {
  const fullPath = path.join(__dirname, dir);
  console.log(`\nContents of ${fullPath}:`);
  try {
    const files = fs.readdirSync(fullPath);
    files.forEach(file => {
      const filePath = path.join(fullPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        console.log(`[DIR] ${file}`);
      } else {
        console.log(`[FILE] ${file}`);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${fullPath}: ${error.message}`);
  }
}

// List key directories
listDir('./src');
listDir('./src/views');
listDir('./src/router');