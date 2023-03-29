const btnRegister = document.getElementById('register-button');
const inputPassword = document.getElementById('password-input');


function PasswordCheck(pword) {

    const bLetLowCase = false;
    const bLetUpcase = false;
    const bNum = false;
    const bSpecialChar = false;

    if (typeof pword == 'string') {
        for (let index = 0; index < pword.length; index++) {
            const letter = pword[index];




            if (letter.toUpperCase() === letter) {
                bLetUpcase == true;
            } else {
                bLetUpcase == false;
            }
            if (letter.toLowerCase() === letter) {
                bLetLowCase == true;
            } else {
                bLetLowCase == false;
            }

            if (containsNumber(letter) === true) {
                bNum == true;
            } else {
                bNum == false;
            }

            if (bLetUpcase && bLetLowCase && bNum === false) {
                bSpecialChar == true;
            } else {
                bSpecialChar == false
            }


            console.log(`${letter}\n`);
            console.log(toString(bLetUpcase));
            console.log(toString(bLetLowCase));
            console.log(toString(bNum));
            console.log(toString(bSpecialChar));
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


function containsNumber(str) {
    return /[0-9]/.test(str);
}