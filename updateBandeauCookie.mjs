import { writeFileSync, mkdirSync } from "fs";

const content = `"use client";
import { useState } from "react";

export default function BandeauCookie() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{position:"fixed",bottom:0,left:0,right:0,background:"#1f2937",color:"white",padding:"16px",zIndex:9999,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"12px",boxShadow:"0 -4px 20px rgba(0,0,0,0.2)"}}>
      <p style={{margin:0,fontSize:"14px",maxWidth:"560px",textAlign:"center",lineHeight:"1.5"}}>
        Ce site utilise un cookie technique strictement necessaire pour limiter la participation au jeu a une fois par session. Il ne contient aucune donnee personnelle et ne sert pas au suivi publicitaire.{" "}
        <a href="/politique-confidentialite" style={{color:"#f97316",textDecoration:"underline"}}>
          En savoir plus
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        style={{background:"#f97316",color:"white",border:"none",padding:"8px 18px",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"bold",whiteSpace:"nowrap"}}
      >
        OK, compris
      </button>
    </div>
  );
}
`;

mkdirSync("app/components", { recursive: true });
writeFileSync("app/components/BandeauCookie.tsx", content, "utf8");
console.log("OK - app/components/BandeauCookie.tsx mis a jour");