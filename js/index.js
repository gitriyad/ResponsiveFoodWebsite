let firstIcon = document.querySelectorAll(".section-1__icons i")[0];
setInterval(() => {
    let curIcon = document.querySelector(".zoom-in-out");
    curIcon.classList.remove("zoom-in-out");
    if (curIcon.nextElementSibling) {
        curIcon.nextElementSibling.classList.add("zoom-in-out");
    } else {
        firstIcon.classList.add("zoom-in-out");
    }
}, 3000);
// var i = 1,ps=568,ps2=1136,ps3=0;
// document.addEventListener('scroll', function (e) {
//     let el = document.getElementById("test");
//     let del = document.getElementById("nd");
//     let thrd = document.getElementById("thrd");
//     let arr=[el,del,thrd];
//     let sc = window.pageYOffset || document.documentElement.scrollTop;
//     if (sc <= ps) {
        
//         el.style.position = "fixed";
//         el.style.zIndex = "10";
//         el.style.top = "0";
//         el.style.left = "0";
//         del.style.marginTop = "100vh";
//         del.style.position="relative";
//         el.style.opacity = 1 - sc / ps;
//         del.style.zIndex = "9";
//     }
//     else if (sc > 568) {
//         del.style.marginTop = "0";
//         del.style.position = "fixed";
//         del.style.zIndex = "10";
//         del.style.opacity = 1 - ((Math.floor(sc)-568) / ps2) ;
//         del.style.top = "0";
//         del.style.left = "0";
//         thrd.style.marginTop = "200vh";
//         thrd.style.zIndex = "8";
//     }
//     if (sc > 1050) {
//         thrd.style.position="relative";
//         thrd.style.zIndex = "10";
//         el.style.opacity = 0;
//         del.style.opacity = 0;

//         del.style.zIndex = "7";
//         el.style.zIndex = "6";
//     }
//     ps3 = sc;
// });
let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let navbarLink = document.querySelectorAll(".navbar__link");
menu.addEventListener("click", () => {
    if (menu.style.top == "16rem") {
        menu.style.top = "2rem";
        navbar.style.top = "-13.5rem";
        menu.style.transitionDelay = "1.2s";
        navbar.style.transitionDelay = "1s";

        for (let i = 0; i < navbarLink.length; i++) {
            navbarLink[i].style.opacity = "1";
        }
        
        let d = 0;
        for (let i = navbarLink.length - 1; i >= 0; i--){
            console.log(navbarLink[i]);
             navbarLink[i].style.animation = "fadeOut .2s linear forwards";
             navbarLink[i].style.animationDelay = `${d}s`;
             d += .2;
        }
    } else {
        menu.style.top = "16rem";
        navbar.style.top = "0rem";
        navbar.style.transitionDelay = ".5s";
        menu.style.transitionDelay = "0s";
        for (let i = 0; i < navbarLink.length; i++) {
            navbarLink[i].style.opacity = "0";
        }
        let c = 0;
         for (let i = 0; i < navbarLink.length; i++){
             navbarLink[i].style.animation = "fade 1s linear forwards";
             navbarLink[i].style.animationDelay = `${c + 1}s`;
             c += .2;
        }
        
     }
});