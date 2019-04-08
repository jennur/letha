
var button = document.querySelectorAll(".account-btn");
var i;

for(i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(){
    document.getElementById('note').classList.add('showmore');
    window.setTimeout(function(){
      document.getElementById('note').classList.remove('showmore');
    }
    ,3000); //remove error-msg after 3 sec
  });
}
