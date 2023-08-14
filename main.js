// Login form variables
const login_username = document.querySelector('.username');
const login_password = document.querySelector('.password');
const login_username_error = document.querySelector('.username-error');
const login_password_error = document.querySelector('.password-error');
const login_error = document.querySelector('.login-error');

login_error.style.display = "none";
login_username_error.style.display = "none";
login_password_error.style.display = "none";

// Sign up form variables
const signup_name = document.querySelector('.name');
const signup_username = document.querySelector('.username');
const signup_password = document.querySelector('.password');
const signup_name_error = document.querySelector('.name-error');

signup_name_error.style.display = "none";



function loginValidation(){
    if (login_username.value == "" ){
        login_username_error.style.display = "";
        login_error.style.display = "none";
        login_password_error.style.display = "none";
        login_username_error.textContent = "Enter Username";
        return false;
    }

    else if (login_password.value == "" ){
        login_username_error.style.display = "none";
        login_error.style.display = "none";
        login_password_error.style.display = "";
        login_password_error.textContent = "Enter Password";
        return false;
    }
    
    else if(login_username.value != "" || login_password.value != ""){
        login_username_error.style.display = "none";
        login_error.style.display = "";
        login_password_error.style.display = "none";
        login_error.textContent = "User Not Found !!";
        return false;
    }


}

function signupValidation(){
    if (signup_name.value < 4){
        signup_name_error.style.display = "";
        signup_name_error.textContent = "Enter a valid name";
        return false;
    }
}