var a=document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clickfun);
}
function clickfun(){
    switch(this.innerHTML){
        case "w":
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
        case "s":
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
        case "d":
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
        case "j":
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
        case "k":
            var audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
        case "l":
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
        default:
            break;
        }
}
//var 