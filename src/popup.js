import './style.css';
import {isLoggedIn, LogIn} from "./utils";

const login_field = document.getElementById("loginField")
const login_accountName = document.getElementById('account')
const login_submitButton = document.getElementsByClassName('login_submit')[0];

login_submitButton.addEventListener("click", function () {
    LogIn(login_accountName.value)
    login_field.hidden = true;
})

if (isLoggedIn()) {
    login_field.hidden = true;
}
