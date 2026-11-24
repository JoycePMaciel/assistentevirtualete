(() => {
 const root=document.documentElement,button=document.querySelector('.theme-toggle'),icon=document.querySelector('.theme-icon');
 if(localStorage.getItem('mariana-theme')==='dark')root.dataset.theme='dark';
 const sync=()=>{const dark=root.dataset.theme==='dark';icon.textContent=dark?'☀':'☾';button.setAttribute('aria-label',dark?'Alternar para tema claro':'Alternar para tema escuro')};sync();
 button.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('mariana-theme',root.dataset.theme);sync()});
 const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 const close=()=>{nav.classList.remove('open');document.body.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.textContent='☰'};
 menu.addEventListener('click',()=>{const open=!nav.classList.contains('open');nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.textContent=open?'×':'☰'});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 const items=document.querySelectorAll('.reveal');
 if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('is-visible'));
 // Interação 2.5D do pacote fornecido: inclinação sutil pelo ponteiro, sem deformar a personagem.
 const stage=document.querySelector('.hero-stage'),character=document.querySelector('#characterWrap');
 if(stage&&character&&!matchMedia('(prefers-reduced-motion: reduce)').matches){let frame=0;stage.addEventListener('pointermove',event=>{const rect=stage.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width-.5,y=(event.clientY-rect.top)/rect.height-.5;if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{character.style.transform=`translateX(-50%) rotateY(${x*7}deg) rotateX(${-y*5}deg) translate3d(${x*9}px,${y*7}px,18px)`})});stage.addEventListener('pointerleave',()=>{character.style.transform='translateX(-50%) rotateY(0deg) rotateX(0deg) translate3d(0,0,0)'})}
})();

