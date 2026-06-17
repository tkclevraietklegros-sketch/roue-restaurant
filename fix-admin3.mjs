import { readFileSync, writeFileSync } from 'fs';

let lines = readFileSync('app/admin/page.tsx', 'utf8').split('\n');

let debut = -1;
let fin = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("id='newLabel'") && debut === -1) {
    // cherche le debut du div parent
    for (let j = i; j >= 0; j--) {
      if (lines[j].includes("display:'flex',flexWrap:'wrap'")) {
        debut = j;
        break;
      }
    }
    // cherche la fin du div
    for (let j = i; j < lines.length; j++) {
      if (lines[j].trim() === '</div>' && j > i) {
        fin = j;
        break;
      }
    }
    break;
  }
}

if (debut !== -1 && fin !== -1) {
  lines.splice(debut, fin - debut + 1);
  writeFileSync('app/admin/page.tsx', lines.join('\n'));
  console.log('Doublon supprime lignes', debut, 'a', fin);
} else {
  console.log('Bloc non trouve');
}