const container=document.querySelector('.signup-form');
let isShow=true;

function change(){
    isShow=!isShow;
    container.classList.toggle("hide",isShow);

}