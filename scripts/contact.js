var toggleButtons = document.getElementsByClassName('toggle');
var i;

for(i = 0; i < toggleButtons.length; i++){
  toggleButtons[i].addEventListener('click', function(){
      this.querySelector('.hide').classList.toggle('showmore');
      this.querySelector('.toggle-btn').classList.toggle('toggle-btn-open');
    });
  }


var contactForm = document.getElementById('contactform');
var sendButton = document.getElementById('contact-submit');
var nameField = document.getElementById('name');
var textField = document.getElementById('msg');
var emailField = document.getElementById('email');
var successModal = document.getElementById('success-contact');
var closeButton = successModal.children[0];

sendButton.onclick = function(e){
    if(!validateText(nameField.value)){
      e.preventDefault();
      contactForm.children[4].innerHTML = "Please enter a name.";
    }
    else if(!validateEmail(emailField.value)){
      e.preventDefault();
      contactForm.children[4].innerHTML = "Please enter a valid e-mail address.";
    }
    else if(!validateText(textField.value)){
      e.preventDefault();
      contactForm.children[4].innerHTML = "Please enter a message.";
    }
  else{
    e.preventDefault();
    successModal.style.display = "block";
    contactForm.children[4].innerHTML = "";
  }
};

closeButton.onclick = function(){
  successModal.style.display = "none";
};
