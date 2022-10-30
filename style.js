window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle("bg", window.scrollY > 0);
    let content = document.querySelector('.main');
    content.classList.toggle("transform", window.scrollY > 1);
})

function mbburger() {
    let burger = document.getElementById("burger");
    let mblist =  document.getElementById("mbnavbar")
    
    if (  mblist.style.display != "block") {
        mblist.style.display = "block";
        
    }else{
        mblist.style.display = "none";
        
    };
    burger.classList.toggle("mbmenu");
}