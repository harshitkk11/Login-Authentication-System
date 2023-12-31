// Form error display element
const form_error = document.querySelectorAll('.error');
for(let element of form_error){
    element.style.display = "none";
}

// Display error on the web page
function displayError(selector, error){
    for(let element of form_error){
    element.style.display = "none";
    }
    const element = document.querySelector(selector);
    element.style.display = "";
    element.innerHTML = error;
}

// Validate login form inputs
function loginValidation(){
    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    var submit = true;
    
    if (username.value == ""){
        displayError(".username-error", "Enter Username !!");
        submit =  false;
    }

    else if (username.value.length < 5){
        displayError(".username-error", "Invalid Username !!");
        submit =  false;
    }

    else if (password.value == ""){
        displayError(".password-error", "Enter Password !!");
        submit =  false;
    }

    else if (password.value.length < 8){
        displayError(".password-error", "Invalid Password !!");
        submit =  false;
    }

    else if(username.value != "" && password.value != "" && username.value.length >= 5 && password.value.length >= 8){
        displayError(".login-error", "User not found !!");
        submit =  false;
    }

    return submit;
}

// Validate signup form inputs
function signupValidation(){
    const name = document.querySelector('.name');
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    var submit = true;
    const specialChars = /[@!#$%^&*()+=_,.`~-\d]/;
    
    if (name.value.length < 4 || specialChars.test(name.value)){
        displayError(".name-error", "Invalid Name !!");
        submit =  false;
    }

    else if (username.value == "" || /[ @!#$%^&*()+=_,.`~-]/.test(username.value)){
        displayError(".username-error", "Invalid Username !!");
        submit =  false;
    }

    else if (email.value == ""){
        displayError(".email-error", "Enter your email address !!");
        submit =  false;
    }

    else if (password.value.length < 8){
        displayError(".password-error", 
        "Strong password requires At least :<br>\
        * 8 characters<br>\
        * One lowercase character<br>\
        * One special character<br>\
        * One uppercase character<br>\
        * One number");
        submit =  false;
    }

    else if(name.value != "" && username.value != "" && email.value != "" && password.value != ""){
        displayError(".signup-error", "User not found !!");
        submit =  false;
    }

    return submit;
}

function forgotEmail(){
    const email = document.querySelector('.email');
    var submit = true;

    if (email.value == ""){
        displayError(".email-error", "Enter your email address !!");
        submit =  false;
    }
    
    return submit;
}