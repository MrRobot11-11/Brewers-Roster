

/* Toggle between adding and removing the "responsive" class 
to topNav when the user clicks on the icon */
var hamburgerMenu = document.getElementById("myTopnav");
hamburgerMenu.onclick = () => {
  if (hamburgerMenu.className === "topNav") {
    hamburgerMenu.className += " responsive";
  } else {
    hamburgerMenu.className = "topNav";
  }
};






