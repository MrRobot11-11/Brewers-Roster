/* Toggle between adding and removing the "responsive" class 
to topNav when the user clicks on the icon */
function toggleTopNav() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
} 

