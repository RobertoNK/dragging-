
// declaration of variables

var diffx, diffy, theElement;

function grabber(event){
  
  theElement = event.currentTarget;
  // getting current for position
  var posx = parseInt(theElement.style.left);
  var posy = parseInt(theElement.style.top);
 
   /* computes the difference between where it is and where the mouse click ocuuered
   */
   diffx = event.clientX-posx;
   diffy = event.clientY-posy;
  
  document.addEventListener("mousemove",mover,true);
  document.addEventListener("mouseup",dropper,true);
//The stopPropagation() method prevents propagation of the same event from being called  
 event.stopPropagation();
  //The event.preventDefault() method stops the default action of an element from happening.
 event.preventDefault();
}
function mover(event){
  // updates the new postion after dragging
  theElement.style.left =(event.clientX - diffx)+"px";
  theElement.style.top=(event.clientY -diffy)+"px";
  event.stopPropagation();
}
function dropper(){
  document.removeEventListener("moveup",dropper,true);
  document.removeEventListener("mousemove", mover,true);
  event.stopPropation();
}