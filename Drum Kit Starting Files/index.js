


//function which listnes from webpage button and not from keyboard
function gotClicked() {

    var button = this;  
    makeSound(button.innerHTML);
    button.classList.add("pressed");

    function removeIt() {
        button.classList.remove("pressed");
        
    }

    setTimeout( removeIt, 100);

}


//function which listnes to keyboard 

function makeSound(key) {


    switch (key) {
        case "w":
            button = document.querySelector(".w");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);
        
            
            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":

            button = document.querySelector(".a");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);
            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":

            button = document.querySelector(".s");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);

            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            
            button = document.querySelector(".d");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);

            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            
            button = document.querySelector(".j");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);

            var audio = new Audio("/Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();
            break;
            
        case "k":

            button = document.querySelector(".k");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);

            var audio = new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio.play();
            break;
            
        case "l":
            
            button = document.querySelector(".l");
            button.classList.add("pressed");

            function removeIt() {
                button.classList.remove("pressed");
                
            }
        
            setTimeout( removeIt, 100);

            var audio = new Audio("/Drum Kit Starting Files/sounds/crash.mp3");
            audio.play();
            break;
    
        default:
            console.log('some other key was pressed, namely '+ key);
            break;
    }
}


var buttons = document.querySelectorAll(".drum");

//creating event listners for buttons
for (let i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener("click",gotClicked);
   
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
});


//keypress with Jquery for h1 -- DRUM KIT

//function to change h1
// function changeH1(e) {
        
// }

$("body").keypress(function (e) { 
   
    $("h1").html(e.key);
});