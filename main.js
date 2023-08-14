const username = document.querySelector('.username');
const password = document.querySelector('.password');

function validation(){
    if (username.value == "" ){
        document.querySelector('.alert').textContent = "Enter Username";
        return false;
    }

    else if (password.value == "" ){
        document.querySelector('.alert').textContent = "Enter Password";
        return false;
    }
    
    else if(username.value != "" || password.value != ""){
        document.querySelector('.alert').textContent = "";
        return true;
    }

}
