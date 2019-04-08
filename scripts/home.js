
var emailSubmit1 = document.getElementById('email-submit1');


emailSubmit1.onclick = function(e){
  var emailInput = document.getElementById('email-input1').value;
  var emailError = document.getElementById('email-error1');

  if(!validateEmail(emailInput)){
      emailError.style.display = 'block';
  }
  else{
    emailError.style.display = 'none';
    successModal.style.display = 'block';
  }
}
