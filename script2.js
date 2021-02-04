const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password');
const password2 = document.getElementById('password2')

function showError(input, message) {
    const formField = input.parentElement;
    formField.className = 'form-fields error'
    const small = formField.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formField = input.parentElement;
    formField.className = 'form-fields success'
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'email is not valid')
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'passwords do not match')
    }
};

function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    }
    )
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 25)
    checkLength(password, 8, 30)
    checkEmail(email);
    checkPasswordsMatch(password, password2);
})