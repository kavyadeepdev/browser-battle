const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('final_content.json', 'utf8'));

let tsContent = 'export const BMSCE_DATA: Record<string, string> = {\n';

for (const [key, value] of Object.entries(data)) {
    const formattedKey = key.replace('https://bmsce.ac.in/home/', '').replace('https://www.bmsce.ac.in', 'Home');
    tsContent += `  "${formattedKey}": \`${value.replace(/`/g, '\\`')}\`,\n`;
}

tsContent += '};\n';

fs.mkdirSync('app/lib', { recursive: true });
fs.writeFileSync('app/lib/bmsce_data.ts', tsContent);
console.log('Successfully created app/lib/bmsce_data.ts');
