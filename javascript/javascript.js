


/* Toggle between adding and removing the "responsive" class 
to topNav when the user clicks on the icon */
var x = document.getElementById("myTopnav");
x.onclick = () => {
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
};

/*
function initposts() {
    for(let j = 0; j < data.length; j++){
        console.log(data[j].id)
    }
}

initposts();
*/