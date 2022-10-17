
let wdrum=document.querySelectorAll("button.drum").length;
let drum=document.querySelectorAll("button.drum");
for(let i=0;i<wdrum;i++){
drum[i].addEventListener("click",function(){
    let aud;
    let played=this.innerHTML;
    switch(played){
        case "w": aud=new Audio('sounds/crash.mp3');
                 aud.play();
                 break;
        case "a": aud=new Audio('sounds/kick-bass.mp3');
                 aud.play();
                 break;
        case "s": aud=new Audio('sounds/snare.mp3');
                 aud.play();
                 break;
        case "d": aud=new Audio('sounds/tom-1.mp3');
                 aud.play();
                 break;
        case "j": aud=new Audio('sounds/tom-2.mp3');
                 aud.play();
                 break;
        case "k": aud=new Audio('sounds/tom-3.mp3');
                 aud.play();
                 break;
        case "l": aud=new Audio('sounds/tom-4.mp3');
                 aud.play();
                 break;
                                   
                 
    }
});
}
window.addEventListener("keydown", move);
function move(event){
    switch(event.key){
        case "w": aud=new Audio('sounds/crash.mp3');
                 aud.play();
                 break;
        case "a": aud=new Audio('sounds/kick-bass.mp3');
                 aud.play();
                 break;
        case "s": aud=new Audio('sounds/snare.mp3');
                 aud.play();
                 break;
        case "d": aud=new Audio('sounds/tom-1.mp3');
                 aud.play();
                 break;
        case "j": aud=new Audio('sounds/tom-2.mp3');
                 aud.play();
                 break;
        case "k": aud=new Audio('sounds/tom-3.mp3');
                 aud.play();
                 break;
        case "l": aud=new Audio('sounds/tom-4.mp3');
                 aud.play();
                 break;
                                   
                 
    }
}