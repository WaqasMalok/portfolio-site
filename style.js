window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle("bg", window.scrollY > 0);
    let content = document.querySelector('.main');
    content.classList.toggle("transform", window.scrollY > 1);
})