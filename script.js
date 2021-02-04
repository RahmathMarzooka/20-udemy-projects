// const form = document.getElementById('form');
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const passsword = document.getElementById('password')
// const password2 = document.getElementById('password2')

// function showError(input, message) {
//     formField = input.parentElement;
//     formField.className = 'form-fields error';
//     const small = formField.querySelector('small');
//     small.innerText = message;
// }
// function showSuccess(input) {
//     formField = input.parentElement;
//     formField.className = 'form-fields success';
// }

// function checkEmailIsValid(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (username.value === '') {
//         showError(username, 'Username is Required');
//     } else {
//         showSuccess(username);
//     }


//     if (email.value === '') {
//         showError(email, 'email is Required');
//     } else if (!checkEmailIsValid(email.value)) {
//         showError(email, 'email is not valid')
//     } else {
//         showSuccess(email)
//     }

//     if (password.value === '') {
//         showError(password, 'password is Required');
//     } else {
//         showSuccess(password);
//     }
//     if (password2.value === '') {
//         showError(password2, 'password is Required');
//     } else {
//         showSuccess(password);
//     }

// });

