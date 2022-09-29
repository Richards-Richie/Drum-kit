var a=document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clickfun);
}
function clickfun(){
    this.style.color="white"
    audio=new Audio("./sounds/tom-1.mp3");
    audio.play();
}
//var 