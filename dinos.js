/*plays() is the function that plays each sound as it is
pressed. It first pauses all sounds, then loads the sounds
to play from the beginning.*/
function plays(theSound) {
    stops();
    var sounds = document.getElementById(theSound);
    sounds.load();
    sounds.play();
}
/*stops() is the function that pauses all sounds*/
function stops() {
    var aud = document.getElementsByTagName("AUDIO");

    for(i=0; i<aud.length; i++) {
        aud[i].pause();
    }
}

/*showFacts() is the function that removes the dino pic
and returns the dino facts*/
function showFacts() {
    var facts = document.getElementById("dFact");
    var pic = document.getElementById("dinoPic");
    facts.style.display = "block";
    pic.style.display = "none";
    plays('fact');
}
/*hideFacts() is the function that reverses the dino facts
and dino pic*/
function hideFacts() {
    var facts = document.getElementById("dFact");
    var pic = document.getElementById("dinoPic");
    pic.style.display = "block";
    facts.style.display = "none";  
    stops();  
}

function showMenu(menus) {
    var change = document.getElementById(menus);
   
      if(change.style.display == "block")
          change.style.display = "none";
     else
         change.style.display = "block";
}

function closeMenu() {
    var menus = [];
    menus[0] = document.getElementById('nav-menu');
    menus[1] = document.getElementById('cat');
    menus[2] = document.getElementById('nav-settings');

    for(i=0; i<3; i++) {
        menus[i].style.display = "none";
    }
}

document.getElementById("letters").addEventListener("click", closeMenu);
document.getElementById("dinos").addEventListener("click", closeMenu);
document.getElementById("sounds").addEventListener("click", closeMenu);