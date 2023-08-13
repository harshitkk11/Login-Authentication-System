const username = document.querySelector('.username');
const password = document.querySelector('.password');

function validation(){
    if (username.value == "" ){
        document.querySelector('.alert').textContent = "Enter Username";
    }

    else if (password.value == "" ){
        document.querySelector('.alert').textContent = "Enter Password";
    }
    
    else if(username.value != "" || password.value != ""){
        document.querySelector('.alert').textContent = "";
    }

}

const submit = document.querySelector('.submit');
submit.addEventListener("click", validation);