let img = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(phone){
    img.src= phone;
}
function colors(image){
    container.style. background=image;
}
function changeImg(){
let myElement = document.querySelector('.MyImg')
 myElement.src=img.src;
    
}
var activeImageId=1;
var nextImageId=1;
setInterval(function(){
    nextImageId=nextImageId+1;
    if(nextImageId<5){
        document.getElementById("img"+activeImageId).classList.replace("MyImg","hide");
        document.getElementById("img"+nextImageId).classList.replace("hide","MyImg");
        activeImageId=nextImageId;

    }else{
        document.getElementById("img"+activeImageId).classList.replace("MyImg","hide");
        document.getElementById("img"+nextImageId).classList.replace("hide","MyImg");
        activeImageId=5;
        nextImageId=1;

    }

},1500);
    
     