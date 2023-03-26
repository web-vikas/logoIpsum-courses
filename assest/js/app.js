const searchBtn = document.querySelector('#searchBtn')
const backtopBtn = document.querySelector('#backtop')
let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 300;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 300;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);


searchBtn.addEventListener('click',()=>{
    document.querySelector('.searchbar').classList.toggle('hide')
})
backtopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
    
})