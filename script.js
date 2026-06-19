// Pequeñas interacciones: año dinámico y cambio de tema
document.addEventListener('DOMContentLoaded', () => {
  // año en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // tema claro/oscuro simple
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const dark = localStorage.getItem('site-theme') || 'dark';
  applyTheme(dark);

  btn?.addEventListener('click', () => {
    const t = (localStorage.getItem('site-theme') === 'dark') ? 'light' : 'dark';
    applyTheme(t);
    localStorage.setItem('site-theme', t);
  });

  function applyTheme(mode){
    if(mode === 'light'){
      root.style.setProperty('--bg','#f6f9fc');
      root.style.setProperty('--text','#071226');
      root.style.setProperty('--muted','#29506a');
      root.style.setProperty('--card','linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))');
      btn.textContent = '☀️';
    } else {
      root.style.setProperty('--bg','#0f1724');
      root.style.setProperty('--text','#e6eef8');
      root.style.setProperty('--muted','#9bb0c9');
      root.style.setProperty('--card','linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))');
      btn.textContent = '🌙';
    }
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
