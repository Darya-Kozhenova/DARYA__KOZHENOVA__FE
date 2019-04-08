
/*ffunction valid () {
var emailField = document.getElementById('formEmail').value;
var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;
var passField = document.getElementById('form_password').value;
var emptyF = false;

    if (emailField == "" || emailField == " ") {
        emptyF = 'Enter your e-mail';
    } else if (regEmail.test(emailField) == false) {
        document.getElementById('wrong_email').innerHTML = 'Invalid email';
    } else if (passField == "" || passField == " ") {
        emptyF = 'Enter your password';
    }
    if (emptyF) {
        alert(emptyF);
        }
}
document.getElementById('form_submit').addEventListener('click', valid);

formEmail.onblur = function errorMes () {
    if (regEmail.test(emailField) == false) {
        
    }
};
function errorMes () {
var emailField = document.getElementById('form_email').value;
var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;
var emptyF = false;
if (regEmail.test(emailField) == false) {
    emptyF = 'Invalid email';
}
if (emptyF) {
    alert(emptyF);
    }
}
document.getElementById('form_submit').addEventListener('click', errorMes);

function wrong () {
var emailField = document.getElementById('form_email').value;
var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,5})$/;
    if (regEmail.test(emailField) == false) {
        emptyF = 'Invalid email';
    }
var div = document.createElement('div');
div.className = "error";
div.innerHTML = 'Invalid email';
    if (emptyF)  { 
        alert('div');
    }
}
document.getElementById('form_email').addEventListener('blur', wrong);*/

