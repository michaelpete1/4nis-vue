// case-fix.js - ES Modules version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory (ES modules equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create lowercase versions of your view files
const viewsDir = path.join(__dirname, 'src', 'views');
const files = fs.readdirSync(viewsDir);

files.forEach(file => {
  if (file.endsWith('.vue')) {
    const lowercase = file.toLowerCase();
    if (file !== lowercase) {
      console.log(`Renaming ${file} to ${lowercase}`);
      fs.copyFileSync(
        path.join(viewsDir, file),
        path.join(viewsDir, lowercase)
      );
    }
  }
});

console.log("Done creating lowercase versions of all view files");