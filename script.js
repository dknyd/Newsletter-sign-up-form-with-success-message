// HANDLING BACKGROUN SRC

const imageSignup = document.querySelector(".imageSignup");

window.addEventListener('load', function() {
  var windowWidth = window.innerWidth;  
  if (windowWidth > 800) {
    imageSignup.src = 'assets/images/illustration-sign-up-desktop.svg'; 
  } else {
    imageSignup.src = 'assets/images/illustration-sign-up-mobile.svg'; 
  }
});

window.addEventListener('resize', function() {
  var windowWidth = window.innerWidth;  
  if (windowWidth > 800) {
    imageSignup.src = 'assets/images/illustration-sign-up-desktop.svg'; 
  } else {
    imageSignup.src = 'assets/images/illustration-sign-up-mobile.svg'; 
  }
});


// HANDLING SUCCESS STATE
const containerMain = document.querySelector(".containerMain");
const containerSuccessMessage = document.querySelector(".containerSuccessMessage");
const inputButton = document.querySelector(".inputButton");
const dismissButton = document.querySelector(".dismissButton");
const inputEmail = document.querySelector(".inputEmail");
const textEmail = document.querySelector(".textEmail");

inputButton.addEventListener("click", function(){
  // Email validation
  var emailInput = document.getElementById('inputEmail');
  var email = emailInput.value;
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  if (!emailPattern.test(email)) {
    // Display an error message or perform other actions
    inputEmail.style.backgroundColor = "rgba(255,232,230,255)";
    inputEmail.style.borderColor = "red";
    inputEmail.style.color = "rgba(215,127,124,255)";
    const errorMessage = document.createElement("span");
    errorMessage.innerHTML = "Valid email required";
    errorMessage.style.marginLeft = "50%";
    errorMessage.style.color = "rgba(215,127,124,255)";
    textEmail.insertAdjacentElement('beforeend', errorMessage);
    return;
  }

  makeHidden(containerMain);
  makeVisible(containerSuccessMessage)
})

dismissButton.addEventListener("click", function(){
  makeHidden(containerSuccessMessage);
  makeVisible(containerMain)
})




// ***FUNCTIONS*** //
    //Hide
    function makeHidden(element){
      element.classList.remove("visible");
      element.classList.add("hidden")
  }
  
  //Make visible
  function makeVisible(element){
      element.classList.remove("hidden");
      element.classList.add("visible")
  }



