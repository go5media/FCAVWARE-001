:root{
  --bg:#0b1220;
  --panel:#0f1a2f;
  --panel2:#0c162a;
  --text:#eaf0ff;
  --muted:#b9c5e6;
  --accent:#4fd1c5;
  --accent2:#60a5fa;
  --border:rgba(255,255,255,.10);
  --shadow: 0 12px 30px rgba(0,0,0,.35);
  --radius:18px;
  --max:1100px;
}

*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  background: radial-gradient(1200px 800px at 20% 0%, rgba(79,209,197,.18), transparent 55%),
              radial-gradient(900px 700px at 90% 10%, rgba(96,165,250,.15), transparent 50%),
              var(--bg);
  color:var(--text);
  line-height:1.55;
}

a{color:inherit}
.container{width:min(var(--max), calc(100% - 32px)); margin:0 auto}

.site-header{
  position:sticky; top:0; z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(11,18,32,.65);
  border-bottom:1px solid var(--border);
}
.header-inner{
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 0;
}
.brand{
  display:flex; align-items:center; gap:10px;
  text-decoration:none;
}
.brand-mark{
  display:inline-flex; width:32px; height:32px; border-radius:10px;
  align-items:center; justify-content:center;
  background:linear-gradient(135deg, rgba(79,209,197,.25), rgba(96,165,250,.25));
  border:1px solid var(--border);
  box-shadow: var(--shadow);
}
.brand-name{font-weight:750; letter-spacing:.2px}

.site-nav{
  display:flex; gap:16px; align-items:center;
}
.site-nav a{
  text-decoration:none;
  padding:8px 10px;
  border-radius:999px;
  color:var(--muted);
}
.site-nav a:hover{background:rgba(255,255,255,.06); color:var(--text)}
.site-nav .pill{
  background:rgba(79,209,197,.14);
  color:var(--text);
  border:1px solid rgba(79,209,197,.25);
}

.nav-toggle{
  display:none;
  background:rgba(255,255,255,.06);
  color:var(--text);
  border:1px solid var(--border);
  border-radius:999px;
  padding:8px 12px;
}

.hero{
  padding:54px 0 26px;
}
.hero-inner{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap:22px;
  align-items:stretch;
}
.hero-copy h1{
  margin:0 0 10px;
  font-size: clamp(34px, 4.2vw, 54px);
  line-height:1.05;
}
.accent{color:var(--accent)}
.lead{color:var(--muted); font-size:1.05rem; max-width:62ch}

.cta{display:flex; gap:12px; flex-wrap:wrap; margin:18px 0 10px}
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:11px 14px;
  border-radius:14px;
  border:1px solid var(--border);
  text-decoration:none;
  font-weight:650;
}
.btn.primary{
  background:linear-gradient(135deg, rgba(79,209,197,.20), rgba(96,165,250,.18));
  border-color: rgba(79,209,197,.28);
}
.btn.ghost{
  background:rgba(255,255,255,.06);
}
.btn:hover{transform: translateY(-1px)}
.mini{display:flex; gap:10px; flex-wrap:wrap; margin-top:10px}
.tag{
  font-size:.88rem;
  color:var(--muted);
  border:1px solid var(--border);
  background:rgba(255,255,255,.05);
  padding:6px 10px;
  border-radius:999px;
}

.hero-card{
  background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
  border:1px solid var(--border);
  border-radius: var(--radius);
  padding:18px;
  box-shadow: var(--shadow);
}
.hero-card h2{margin:0 0 10px; font-size:1.1rem}
.checklist{margin:0; padding-left:18px; color:var(--muted)}
.checklist li{margin:8px 0}
.note{margin:12px 0 0; color:var(--muted); font-size:.95rem}

.section{padding:44px 0}
.section.alt{
  background: linear-gradient(180deg, rgba(255,255,255,.03), transparent);
  border-top:1px solid var(--border);
  border-bottom:1px solid var(--border);
}
.section-head{margin-bottom:18px}
.section-head h2{margin:0 0 6px; font-size:1.8rem}
.section-head p{margin:0; color:var(--muted); max-width:75ch}

.grid{display:grid; gap:16px}
.grid.two{grid-template-columns: repeat(2, 1fr)}
.grid.three{grid-template-columns: repeat(3, 1fr)}

.card{
  background:rgba(15,26,47,.55);
  border:1px solid var(--border);
  border-radius: var(--radius);
  padding:16px;
  box-shadow: 0 10px 24px rgba(0,0,0,.22);
}
.card h3{margin:0 0 8px}
.card p{margin:0; color:var(--muted)}
.bullets{margin:10px 0 0; padding-left:18px; color:var(--muted)}
.bullets li{margin:8px 0}
.small{font-size:.92rem}
.dim{color:rgba(234,240,255,.75)}

.info-bar{
  margin-top:16px;
  padding:12px 14px;
  border-radius: var(--radius);
  border:1px solid var(--border);
  background:rgba(255,255,255,.04);
  color:var(--muted);
  display:flex; flex-wrap:wrap; gap:8px; align-items:center;
}
.dot{opacity:.6}

.callout{
  margin-top:16px;
  border-radius: var(--radius);
  border:1px solid rgba(79,209,197,.25);
  background:rgba(79,209,197,.08);
  padding:16px;
}
.callout h3{margin:0 0 6px}
.callout p{margin:0; color:var(--muted)}

.link-card{ text-decoration:none; }
.link-card[aria-disabled="true"]{opacity:.7; cursor:not-allowed}
.link-card:hover{outline:2px solid rgba(96,165,250,.25)}

.contact-line{margin:10px 0; color:var(--muted)}
.contact-line a{color:var(--text)}

details{
  border:1px solid var(--border);
  border-radius:14px;
  padding:10px 12px;
  background:rgba(255,255,255,.03);
  margin:10px 0 0;
}
summary{cursor:pointer; font-weight:650; color:var(--text)}
details p{margin:8px 0 0; color:var(--muted)}

.site-footer{
  margin-top:26px;
  padding-top:14px;
  border-top:1px solid var(--border);
  color:rgba(234,240,255,.75);
  font-size:.92rem;
}

@media (max-width: 900px){
  .hero-inner{grid-template-columns: 1fr}
  .grid.three{grid-template-columns: 1fr}
}
@media (max-width: 720px){
  .grid.two{grid-template-columns: 1fr}
  .nav-toggle{display:inline-flex}
  .site-nav{
    display:none;
    position:absolute;
    right:16px; top:62px;
    background:rgba(11,18,32,.95);
    border:1px solid var(--border);
    border-radius:16px;
    padding:10px;
    flex-direction:column;
    align-items:stretch;
    gap:6px;
    width:min(260px, calc(100% - 32px));
  }
  .site-nav.open{display:flex}
  .site-nav a{padding:10px 12px}
}
