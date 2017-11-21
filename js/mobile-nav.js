//variables
const MobileNavMQ = window.matchMedia( "(min-width: 550px)" );
const MobileNavUl = $("header .container nav ul");
var MobileNavClick = 0;

//events
$("header .container nav ul").style.display = "none";
$("header .container i").addEventListener("click", onClickMobileNavIcon);

setInterval(onListenMediaQueryNavDisplay, 1000);

//functions
function $(element){
    return document.querySelector(element);
}

function onClickMobileNavIcon() {
    if($("header .container nav ul").style.display == "none") {
        $("header .container nav ul").style.display = "block";
    }
    else {
        $("header .container nav ul").style.display = "none";
    }
    MobileNavClick++;
}

function onListenMediaQueryNavDisplay(){
    if (MobileNavMQ.matches) {
        $("header .container nav ul").style.display = "inline-flex";
        MobileNavClick = 0;
    }
    else if(MobileNavClick == 0){
            $("header .container nav ul").style.display = "none";
    }  
}