for( var i = 0; i < document.querySelectorAll(".drum").length ; i++){
   
    document.getElementsByClassName("drum")[i].addEventListener("click",  function (){
       
        var buttonInnerHTML = this.innerHTML;
        // console.log(this);
        makeSound(buttonInnerHTML);
        animate(buttonInnerHTML);

        
        


    });
   
}
``
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    
    
})

function makeSound(eventListner){
    switch(eventListner){
        case"w":
        var tom1 = new Audio('/sounds/tom-1.mp3');
        tom1.play();
            
            break;
            
        
        case"a":
            var tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case"s":
            var crash = new Audio('/sounds/crash.mp3');
            crash.play();
            break;
        
        
        case"d":
            var kickBass = new Audio('/sounds/kick-bass.mp3');
            kickBass.play();
            break;
        
        case"j":
            var snare = new Audio('/sounds/snare.mp3');
            snare.play();
            break;
        
        case"k":
            var tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case"l":
            var tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
            break;
        default:console.log(buttonInnerHTML);
    
    } 
}
    
function animate(reqEvent){
    var anime = document.querySelector("." + reqEvent);
    console.log(anime);
    anime.classList.add('pressed');
    setInterval(function(){
        anime.classList.remove('pressed');
    },400)
}
                                                                    

    


