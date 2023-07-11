
const btn=document.querySelector("#myButton");

btn.addEventListener('click',()=>{
  let widthScreen=window.screen.width;
  let heightScreen=window.screen.height;
  alert(" ширина экрана "+widthScreen+" высота экрана "+heightScreen);
});