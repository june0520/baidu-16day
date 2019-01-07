var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
  for (let i=2;i<=5;i++){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick=show
   }
function show(e){
  var link= e.target.getAttribute('src');
  displayedImage.setAttribute('src',link)
}



/* 编写 变亮/变暗 按钮 */
btn.onclick=function(e){
  var a=e.target.getAttribute('class');
  if(a==='dark'){
    this.setAttribute('class','light');
    overlay.style.backgroundColor='rgba(0,0,0,0.5)';
    this.textContent="变亮"
  } else {
    this.setAttribute('class','dark');
    overlay.style.backgroundColor='rgba(0,0,0,0)';
    this.textContent="变暗a'a'a"


  }


}

