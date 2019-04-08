
var submitBtn = document.getElementById('submit-btn');
var inputs = document.querySelectorAll('input');
var inputError = document.getElementById('error');
var email = document.getElementById('email');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var tc = document.getElementById('tc_id');

var successSignup = document.getElementById('success-signup');
var successCloseButton = successSignup.children[0];

successCloseButton.onclick = function(){
  window.location.href = "loggedin.html";
};


var i;

submitBtn.onclick = function(e){
  var check =  0;

  for(i = 6; i < inputs.length-4; i++){
    console.log(inputs[i].value);

    if(validateText(inputs[i].value)){
      check += 1; //count if input value is valid
      if(inputs[i].type === "email" && validateEmail(inputs[i].value)){
        inputs[i].style.removeProperty('border');
      }
      else if(inputs[i].type === "password" && validatePasswords(password1.value, password2.value)){
        inputs[i].style.removeProperty('border');
      }
      else if(inputs[i].type !== "email" && inputs[i].type !== "password"){
        inputs[i].style.removeProperty('border');
      }
    }
    else{
      e.preventDefault();
      inputs[i].style.border = "1px solid red";
      inputError.innerHTML = "Please fill in all required fields";
    }
  }
  if(check === (inputs.length - 10)){ //if check = number of input values to be validated
      if(!validateEmail(email.value)){
        e.preventDefault();
        email.style.border = "1px solid red";
        inputError.innerHTML = "Please enter a valid e-mail address.";
      }
      else if(!validatePasswords(password1.value, password2.value) || password1.value.length < 6){
        e.preventDefault();
        password1.style.border = "1px solid red";
        password2.style.border = "1px solid red";
        if(password1.value.length < 6){
          inputError.innerHTML = "Your passwords needs to be more than 6 characters";
        }
        else{
          inputError.innerHTML = "Your passwords need to match";
        }
      }
      else if(!tc.checked){
        e.preventDefault();
        inputError.innerHTML = "You need to accept the terms & conditions.";
      }
      else{
        e.preventDefault();
        inputError.innerHTML = "";
        email.style.removeProperty('border');
        password1.style.removeProperty('border');
        password2.style.removeProperty('border');
        successSignup.style.display = "flex";
        successSignup.children[1].innerHTML = "Welcome to Letha, " + document.getElementById('fname').value + "!";
      }
    }
    else{
      e.preventDefault();
    }
  };
