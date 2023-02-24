/* Toggle between adding and removing the "responsive" class 
to topNav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("topNav");
    if(x.className === "navBar"){
        x.className += " responsive";
    }else {
        x.className = "navBar";
    }
}

