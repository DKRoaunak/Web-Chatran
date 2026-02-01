let sign_btn = document.querySelector('.sign');
let name_field = document.querySelector('.name_trans');
let sign_heading = document.querySelector('.sign_heading');
let underline = document.querySelector('.underline');
let switch_sign = document.getElementById('switch_sign');
let btn_forget_password = document.getElementById('btn_forget_password');
let email_trans = document.querySelector('.email_trans');
let password_trans = document.querySelector('.password_trans');
let btn_google = document.getElementById('btn_google');
let google = document.querySelector('.google_button');

var isSign = true;
var isForgetPassword = true;

switch_sign.addEventListener('click', () => {

    if (!isSign) {
        isSign = true;
        name_field.style.maxHeight = '60px';
        sign_heading.innerHTML = 'Sign UP';
        sign_btn.innerHTML = 'Sign up';
        switch_sign.innerHTML = 'Already Sign In ?';
        btn_forget_password.style.fontSize = '0px';
        underline.style.transform = 'translateX(30px)';
    } else {
        isSign = false;
        name_field.style.maxHeight = '0px';
        sign_heading.innerHTML = 'Sign IN';
        sign_btn.innerHTML = 'Sign in';
        switch_sign.innerHTML = 'Create an Account.';
        btn_forget_password.style.fontSize = '14px';
        underline.style.transform = 'translateX(-30px)';
    }
})

btn_forget_password.addEventListener('click', () => {
    if (isForgetPassword) {
        isForgetPassword = false;
        sign_btn.innerHTML = 'Reset Password';
        sign_heading.innerHTML = 'Reset Password';
        btn_forget_password.innerHTML = 'Back to Sign in';
        name_field.style.maxHeight = '0px';
        switch_sign.style.fontSize = '0px';
        password_trans.style.maxHeight = '0px';

    }else{
        isForgetPassword = true;
        sign_btn.innerHTML = 'Sign in';
        sign_heading.innerHTML = 'Sign IN';
        password_trans.style.maxHeight = '60px';
        switch_sign.style.fontSize = '14px';
        btn_forget_password.innerHTML = 'Forget Password ?';
    }
});








