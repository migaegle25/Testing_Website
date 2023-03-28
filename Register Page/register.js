const btnRegister = document.getElementById('register-button');
const inputPassword = document.getElementById('password-input');


function PasswordCheck(pword) {
    if (typeof pword == 'string') {
        for (let index = 0; index < pword.length; index++) {
            const letter = pword[index];
            console.log(`${letter}\n`);
        }
    }
}

function btnClicked() {
    sEmail = document.getElementById('email-input').value;
    sUsername = document.getElementById('username-input').value;
    sPassword = document.getElementById('password-input').value;
    sDateOfBirth = document.getElementById('DateOfBirth-input').value;

    PasswordCheck(sPassword);

    console.log(`Email: ${sEmail} Password: ${sPassword} Username: ${sUsername} Date ${sDateOfBirth}`);
}

inputPassword.addEventListener('input', PasswordCheck);
btnRegister.addEventListener('click', btnClicked);
