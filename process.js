const fs = require('fs');

const data = JSON.parse(fs.readFileSync('extracted.json', 'utf8'));

const targets = [
    'https://www.bmsce.ac.in',
    'https://bmsce.ac.in/home/Civil-Engineering-About',
    'https://bmsce.ac.in/home/Computer-Science-and-Engineering-About',
    'https://bmsce.ac.in/home/Electronics-and-Communication-Engineering-About',
    'https://bmsce.ac.in/home/Mechanical-Engineering-About',
    'https://bmsce.ac.in/home/Aerospace-Engineering-About',
    'https://bmsce.ac.in/home/Bio-Technology-About',
    'https://bmsce.ac.in/home/Machine-Learning-AI-and-ML-About',
    'https://bmsce.ac.in/home/About-Placements',
    'https://bmsce.ac.in/home/Centre-for-Innovation-Incubation-Entrepreneurship-CIIE',
    'https://bmsce.ac.in/home/About-COE-Office',
    'https://bmsce.ac.in/home/TEQIP-III'
];

const results = {};
for (const [key, value] of Object.entries(data)) {
    for (const t of targets) {
        if (key === t || key.includes(t.replace('https://bmsce.ac.in/home/', ''))) {
            results[t] = value;
        }
    }
}
fs.writeFileSync('final_content.json', JSON.stringify(results, null, 2));
console.log('Saved to final_content.json');
