// No browser types here: vite.config.ts imports this to inline the script.
export const storageKey = 'adbox-legal-theme';
export const sessionKey = 'adbox-legal-theme-visit';

/** Inlined into <head> by the build, before anything paints. */
export const bootScript = `(function(){try{var t=['system','light','dark'],q=new URLSearchParams(location.search).get('theme'),s=null,l=null;try{s=sessionStorage.getItem('${sessionKey}')}catch(e){}try{l=localStorage.getItem('${storageKey}')}catch(e){}var v=t.indexOf(q)>-1?q:t.indexOf(s)>-1?s:t.indexOf(l)>-1?l:'system';if(t.indexOf(q)>-1){try{sessionStorage.setItem('${sessionKey}',q)}catch(e){}}document.documentElement.setAttribute('data-theme',v);var d=v==='dark'||(v==='system'&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',d?'#111418':'#ffffff')}catch(e){}})();`;
