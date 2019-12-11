var modal = document.getElementById("alertModal");
var button = document. getElementById("signUpButton");
var button2 = document. getElementById("signUpButton2");
var close = document.getElementById("closeButton");

button.onclick = function() {
    modal.classList.add("modal-inView");
    // modal.style.display = "block";
    console.log("modal");
  }
  
button2.onclick = function() {
    modal.classList.add("modal-inView");
    // modal.style.display = "block";
    console.log("modal");
  }
  
  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    // modal.style.display = "none";
        modal.classList.remove("modal-inView");
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
    //   modal.style.display = "none";
        modal.classList.remove("modal-inView");
    }
  }