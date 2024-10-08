/*
    This Javascript code has one simple purpose; detect whether the user's system is in light or dark
    mode, and change the color palette of your site accordingly. 
*/ 

let lightdark = 1;

//this function checks the users dark mode settings and modifies site styles accordingly
function setDarkMode() {
    /*
            We can grab the HTML elements using querySelector, and then store 
            them in variables for easy access. 
     */

        let myHeader = document.querySelector("header");
        let myBody = document.querySelector("body");
        let myFooter = document.querySelector("footer");

    if (lightdark == 1) {

        /*
            We can then call the variables to modify the objects stored within those
            variables. 
        */

        //change header styles
        myHeader.style.backgroundColor = "#383154";
        myHeader.style.color = "#e2e1e6";

        //change body styles
        myBody.style.backgroundColor = "#4e5080";
        myBody.style.color = "#e2e1e6";

        //change footer styles
        myFooter.style.backgroundColor = "#edad37";
        myFooter.style.color ="eeeeee";

    }
    else {
        myHeader.style.backgroundColor = "#3275a8";
        myHeader.style.color = "#000000";

        myBody.style.backgroundColor = "#eeeeee";
        myBody.style.color = "#000000";
    }

    lightdark *= -1;
}

//call the setDarkMode function
 const button = document.getElementById("darkmode")

 button.addEventListener("click", setDarkMode)
