function creatAccount() {
let userName = document.getElementById('Username').value;
let emailUser = document.getElementById('email').value;
var passwordUser = document.getElementById('password').value;
let Cnfpassword = document.getElementById('Conform-Password').value;

console.log(userName,emailUser,userName,passwordUser,Cnfpassword);

let message_1 = document.getElementById('message1');

let message_2 = document.getElementById('message2');

let message_3 = document.getElementById('message3');

let message_4 = document.getElementById('message4');


if (userName != 0) {
    message_1.innerText = "Successful"
    message_1.style.color = "rgb(10,81,144)";
}else{
    message_1.innerText = "Username can't be empty!";
    message_1.style.color = "red"; 
}

if (emailUser != 0) {
    message_2.innerText = "Successful"
    message_2.style.color = "rgb(10,81,144)";
}else{
    message_2.innerText = "Email can't be empty!";
    message_2.style.color = "red"; 
}


 if (passwordUser.length != 0) {
    
    if (passwordUser==Cnfpassword) {
        if(passwordUser.length >= 8){
            message_4.innerText = "Password Matched.";
            message_4.style.color = "rgb(10,81,144)"
        }
        else{
            message_4.innerText = "Password can't be Less then 8 Digits!";
            message_4.style.color = "red";
        }
        
    }
    else{
        message_4.innerText = "Password didn't match.";
        message_4.style.color = "red"; 
    }
    
}

else{
    message_4.innerText = "Password can't be empty!";
    message_4.style.color = "red"; 
}

}

const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});





