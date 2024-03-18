const main=document.getElementById("main");
const smallPictures=document.getElementById("smallPictures");

const changePicture=(src)=>{
    main.innerHTML=`<img src=${src} alt="" >`
}