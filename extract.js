const fs = require('fs');

const data = fs.readFileSync('bmsce_structure.txt', 'utf8');
const lines = data.split('\n');

let currentUrl = '';
let currentTitle = '';
let inParagraphs = false;
let paragraphs = [];

const results = {};

for (let line of lines) {
    if (line.startsWith('URL: ')) {
        currentUrl = line.replace('URL: ', '').trim();
    } else if (line.startsWith('- Title      :')) {
        currentTitle = line.replace('- Title      :', '').trim();
    } else if (line.startsWith('### Paragraphs')) {
        inParagraphs = true;
        paragraphs = [];
    } else if (line.startsWith('### Lists') || line.startsWith('## ')) {
        if (inParagraphs && paragraphs.length > 0) {
            if (currentUrl.includes('department') || currentUrl.includes('CSE') || currentUrl.includes('Mech') || currentUrl.includes('Computer') || currentUrl.includes('Civil') || currentUrl.includes('Aero') || currentUrl.includes('about') || currentUrl.includes('innovation') || currentUrl.includes('coe') || currentUrl.includes('teqip') || currentUrl.includes('Campus') || currentUrl.includes('Admissions') || currentUrl.includes('Engineering')) {
                results[currentUrl] = paragraphs.join('\n');
            }
        }
        inParagraphs = false;
    } else if (inParagraphs && line.trim() !== '') {
        paragraphs.push(line.trim());
    }
}

fs.writeFileSync('extracted.json', JSON.stringify(results, null, 2));
console.log('Extraction complete. Saved to extracted.json');
