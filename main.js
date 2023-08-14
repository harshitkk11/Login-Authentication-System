const username = document.querySelector('.username');
const password = document.querySelector('.password');
const username_error = document.querySelector('.username-error');
const password_error = document.querySelector('.password-error');
const login_error = document.querySelector('.login-error');

login_error.style.display = "none";
username_error.style.display = "none";
password_error.style.display = "none";

function loginValidation(){
    if (username.value == "" ){
        username_error.style.display = "";
        login_error.style.display = "none";
        password_error.style.display = "none";
        username_error.textContent = "Enter Username";
        return false;
    }

    else if (password.value == "" ){
        username_error.style.display = "none";
        login_error.style.display = "none";
        password_error.style.display = "";
        password_error.textContent = "Enter Password";
        return false;
    }
    
    else if(username.value != "" || password.value != ""){
        username_error.style.display = "none";
        login_error.style.display = "";
        password_error.style.display = "none";
        login_error.textContent = "User Not Found !!";
        return false;
    }


}
