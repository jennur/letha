
/*  HAMBURGER MENU  */
var hamburgerMenu = document.getElementById('hamburger');

hamburgerMenu.onclick = function(e){
  var nav = document.getElementById('hamburger-content');

  if(nav.style.display === "none"){
    nav.style.display = "block";
    //Transform hamburger into X
    document.getElementById('bar-1').classList.add('change-1');
    document.getElementById('bar-2').classList.add('change-2');
    document.getElementById('bar-3').classList.add('change-3');

  }
  else{
    nav.style.display = "none";
    document.getElementById('bar-1').classList.remove('change-1');
    document.getElementById('bar-2').classList.remove('change-2');
    document.getElementById('bar-3').classList.remove('change-3');
  }
}



var navBar = document.getElementById('main-nav');
var loginBar = document.getElementById('login-nav')
var searchBar = document.getElementById('search-container');
var barOffset = navBar.offsetTop;
var cart = document.getElementById('cart');
var profile = document.getElementById('sign-in');

var searchButton = document.getElementById('search-icon');
var searchCloseButton = searchBar.children[0];
var searchSubmit = searchBar.children[2];



searchSubmit.onclick = function(){
  searchBar.children[3].style.display = "block"; //display not-working-msg
  window.setTimeout(function(){
    searchBar.children[3].style.display = "none";
  }
  ,3000); //remove error-msg after 3 sec
};
searchButton.onclick = function(){
  searchBar.style.display = "flex";
};

searchCloseButton.onclick = function(){
  searchBar.style.display = "none";
  searchBar.children[3].style.display = "none";
};



/* STICKY NAV BAR */

window.onscroll = function(){
  stickyBar();
  if(stickyBar()){
    cart.classList.remove('black-bag');
    cart.classList.add('white-bag');
    profile.classList.remove('black-profile');
    profile.classList.add('white-profile');
    loginBar.classList.add('scroll-height');
    navBar.classList.add('scroll-position')
    hamburgerMenu.classList.add('scroll-burger')
  }
  else{
    loginBar.classList.remove('scroll-height');
    cart.classList.remove('white-bag');
    cart.classList.add('black-bag');
    profile.classList.remove('white-profile');
    profile.classList.add('black-profile');
    navBar.classList.remove('scroll-position')
    hamburgerMenu.classList.remove('scroll-burger')

  }
};

function stickyBar(){
  if(window.pageYOffset >= barOffset){
    navBar.classList.add('sticky');
    loginBar.classList.add('sticky');
    hamburgerMenu.classList.add('sticky');
    return true;
  }
  else{
    navBar.classList.remove('sticky');
    loginBar.classList.remove('sticky');
    hamburgerMenu.classList.remove('sticky');
    return false;
  }
}

/* SUCCESS MODAL */
var successModal = document.getElementById('success-modal');
var successCloseButton = successModal.children[0];

successCloseButton.onclick = function(){
  successModal.style.display = "none";
};

/* EMAIL SUBCRIPTION VALIDATION */
var emailSubmit2 = document.getElementById('email-submit2');

emailSubmit2.onclick = function(e){
  var emailInput = document.getElementById('email-input2').value;
  var emailError = document.getElementById('email-error2');

  if(!validateEmail(emailInput)){
      emailError.style.display = 'block';
  }
  else{
    emailError.style.display = 'none';
    successModal.style.display = 'block';
  }
}

/* VALIDATION FUNCTIONS */

function validateText(text){
  if(!text){ return false; }
  else{ return true; }
}

function validateEmail(email){
  var emailCheck = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4}$/;
  if(!emailCheck.test(email)){ return false; }
  else{ return true; }
}

function validatePasswords(password1, password2){
  if(password1 === password2){ return true; }
  else{ return false; }
}
