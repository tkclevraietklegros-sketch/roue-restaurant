import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('app/admin/page.tsx', 'utf8');

content = content.replace(
  `           style={{flex:1,minWidth:'120px',padding:'8px',borderRadius:'8px',border:'1px solid #e5e7eb',fontSize:'14px'}}/>`,
  `<input value={newLabel} onChange={(e) => setNewLabel(e.target.value)} placeholder='Nom du lot' style={{flex:1,minWidth:'120px',padding:'8px',borderRadius:'8px',border:'1px solid #e5e7eb',fontSize:'14px'}}/>`
);

writeFileSync('app/admin/page.tsx', content);
console.log('Corrige !');