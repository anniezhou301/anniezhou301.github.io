
// retrieve the element
element = document.getElementById("fade");
nav = document.getElementById("nav");
// reset the transition by...
nav.addEventListener("click", function(e){
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("animated");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  element.offsetWidth = element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("animated");
}, false);