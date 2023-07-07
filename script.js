var nav_bar = document.getElementById('nav-bar');
document.addEventListener("scroll", navchange);

function navchange(){
    if (window.scrollY > 30){
        nav_bar.classList.add("shadow");
    } else{
        nav_bar.classList.remove("shadow");
    }
}
