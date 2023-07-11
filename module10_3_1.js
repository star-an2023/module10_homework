const myImg=document.querySelector("#main_img");
const myImg1=document.querySelector("#main_img1");
const btn=document.querySelector("#myButton");

btn.addEventListener('click',()=>{
  myImg.classList.toggle("btn_icon_none");
  myImg.classList.toggle("btn_icon");
  myImg1.classList.toggle("btn_icon_none");
  myImg1.classList.toggle("btn_icon");
 
});