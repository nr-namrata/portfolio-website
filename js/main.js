
// graphic-design

let designArea = document.querySelector(".design-area");

let graphicOverlay = document.querySelector(".graphicOverlay");
let boxImg = document.querySelector(".box-img");
var img = document.querySelector (".box-img img");
let close = document.querySelector(".box-img span");


designArea.addEventListener("click", (e) => {
    
    let imagePath = e.target.src; //image path
if (imagePath!== undefined ) {

graphicOverlay.classList.add("overlayShow");
boxImg.classList.add("imgShow");
img.src = imagePath;
}
close.addEventListener("click", ()=>{
    graphicOverlay.classList.remove("overlayShow");
    boxImg.classList.remove("imgShow"); 
})
})

// logo-design

let logoDesign = document.querySelector(".logo-area");
let logoBox = document.querySelector(".logoBox");
let close1 = document.querySelector (".logoBox span");
let logoImg = document.querySelector (".logoBox img");

logoDesign.addEventListener("click", (e) => {
    let imagePath = e.target.src; //image path
    if(imagePath !== undefined){
       
        
        graphicOverlay.classList.add("overlayShow");
        logoBox.classList.add("imgShow");
        logoImg.src = imagePath;
        }
        close1.addEventListener("click", ()=>{
            graphicOverlay.classList.remove("overlayShow");
            logoBox.classList.remove("imgShow"); 
        })
})