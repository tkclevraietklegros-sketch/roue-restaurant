import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('app/admin/page.tsx', 'utf8');

// Supprimer le vieux bloc doublon
const vieux = `          <div style={{display:'flex',flexWrap:'wrap',gap:'8px',padding:'16px',background:'#f9fafb',borderRadius:'12px',marginBottom:'16px',alignItems:'center'}}>
            <input id='newLabel' placeholder='Nom du lot' style={{flex:1,minWidth:'120px',padding:'8px',borderRadius:'8px',border:'1px solid #e5e7eb',fontSize:'14px'}}/>
            <input id='newCouleur' type='color' defaultValue='#f97316' style={{width:'40px',height:'36px',borderRadius:'8px',border:'1px solid #e5e7eb',cursor:'pointer'}}/>
            <input id='newProba' type='number' placeholder='Proba' defaultValue='10' style={{width:'70px',padding:'8px',borderRadius:'8px',border:'1px solid #e5e7eb',fontSize:'14px',textAlign:'center'}}/>
            <button onClick={async () => {
              const label = (document.getElementById('newLabel') as HTMLInputElement).value;
              const couleur = (document.getElementById('newCouleur') as HTMLInputElement).value;
              const probabilite = parseInt((document.getElementById('newProba') as HTMLInputElement).value);
              if (!label) return;
              await supabase.from('lots').insert({ label, couleur, probabilite, actif: true });              setConfirmation('Lot ajoute !');
              setTimeout(() => setConfirmation(''), 2000);
              charger();
            }} style={{padding:'8px 16px',borderRadius:'8px',border:'none',cursor:'pointer',background:'#f97316',color:'white',fontWeight:'bold',fontSize:'14px'}}>Ajouter</button>
          </div>`;

content = content.replace(vieux, '');

writeFileSync('app/admin/page.tsx', content);
console.log('Doublon supprime !');