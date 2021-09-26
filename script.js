       //auto play;
       var $ = document.getElementById('img');
       var $$ =document.getElementById('lui');
       var $$$ = document.getElementById('next');
    var imgs=document.getElementsByClassName('img_slider');
    var numslider= 0;
    function slider(n) {
        for(var i=0;i<imgs.length;i++) {
       imgs[i].style.display = "none";
        }
        imgs[n].style.display = "block"
    }
    slider(0);
var auto = $.onplay = function (){
  numslider=Math.floor((Math.random()*3)+0);
 slider(numslider);
//  console.log(numslider);
    }
    setInterval(auto,3000);
//    đăng kí đăng nhập 
  var hien = document.querySelector(".form-lognIn");
    var login = document.querySelector("#click");
  login.onclick = function (){
   hien.style.display = "block";
  }
  var out = document.getElementById('out');
  out.onclick = function() {
    hien.style.display = "none";
  }
  var login2  = document.getElementById("click_2");
  login2.onclick = function () {
    hien.style.display = "block";
  }
  const back = document.querySelector('.btn_back');
  back.onclick = () => {
    hien.style.display = "none";
  }
  ///img tyle 
  function start()
{
   var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s= time.getSeconds();
  document.getElementById('h').innerHTML = h+"";
  document.getElementById('m').innerHTML = m;
  document.getElementById('s').innerHTML = s;
}
  setInterval(function(){
        start();
    }, 1000);
 
  
  