const btnRegister = document.getElementById('register-button');
const inputPassword = document.getElementById('password-input');
const retypePassword = document.getElementById('password-input-retype');


// isNaN
// number[]
// let a = '1';
// a.charCodeAt(0)



function PasswordCheck2(PasswordTest) {
    const numbersRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const SpecialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


    if (!numbersRegex.test(PasswordTest)) {
        document.getElementById("number").classList.remove(['hideme']);
    } else {
        document.getElementById("number").classList.add(['hideme']);
    }

    if (!upperCaseRegex.test(PasswordTest)) {
        document.getElementById("uppercase").classList.remove(['hideme']);
    } else {
        document.getElementById("uppercase").classList.add(['hideme']);
    }

    if (!lowerCaseRegex.test(PasswordTest)) {
        document.getElementById("lowercase").classList.remove(['hideme']);
    } else {
        document.getElementById("lowercase").classList.add(['hideme']);
    }

    if (!SpecialCharRegex.test(PasswordTest)) {
        document.getElementById("special").classList.remove(['hideme']);
    } else {
        document.getElementById("special").classList.add(['hideme']);
    }

    console.log("Password meets al requirments!");
}

function isPasswordSame(PasswordSame) {
    const sPassword = document.getElementById('password-input').value;
    const sPasswordRetype = document.getElementById('password-input-retype').value;
    const btnRegister = document.getElementById('register-button');

    if(sPassword === sPasswordRetype){
        document.getElementById("password-same").classList.remove(['hideme']);
        document.getElementById("password-not-same").classList.add(['hideme']);
        btnRegister.disabled = false;
    }else{
        document.getElementById("password-not-same").classList.remove(['hideme']);
        document.getElementById("password-same").classList.add(['hideme']);
        btnRegister.disabled = true;
    }

}



function btnClicked() {
    sEmail = document.getElementById('email-input').value;
    sUsername = document.getElementById('username-input').value;
    sPassword = document.getElementById('password-input').value;
    // sDateOfBirth = document.getElementById('DateOfBirth-input').value;

    PasswordCheck2(sPassword);

    console.log(`Email: ${sEmail} Password: ${sPassword} Username: ${sUsername} `);
}



// inputPassword.addEventListener('input', PasswordCheck2);

inputPassword.addEventListener("input", (event) => {
    const sPassword = document.getElementById('password-input').value;
    const PasswordTest = event.target.value;
    PasswordCheck2(sPassword);
    isPasswordSame();
})

retypePassword.addEventListener("input", (event) => {
    const sPasswordRetype = document.getElementById('password-input-retype').value;
    const passwordTest = event.target.value;
    isPasswordSame();

} )

btnRegister.addEventListener('click', btnClicked);











// function PasswordCheck(pword) {

//     const bLetLowCase = false;
//     const bLetUpcase = false;
//     const bNum = false;
//     const bSpecialChar = false;

//     if (typeof pword == 'string') {
//         for (let index = 0; index < pword.length; index++) {
//             const letter = pword[index];
//             debugger;
//             if (letter.toUpperCase() === letter) {
//                 bLetUpcase == true;
//             } else {
//                 bLetUpcase == false;
//             }
//             if (letter.toLowerCase() === letter) {
//                 bLetLowCase == true;
//             } else {
//                 bLetLowCase == false;
//             }

//             if (containsNumber(letter) === true) {
//                 bNum == true;
//             } else {
//                 bNum == false;
//             }

//             if (bLetUpcase && bLetLowCase && bNum === false) {
//                 bSpecialChar == true;
//             } else {
//                 bSpecialChar == false
//             }

//             console.log(`${letter}\n`);
//             console.log(bLetUpcase);
//             console.log(toString(bLetLowCase));
//             console.log(toString(bNum));
//             console.log(toString(bSpecialChar));
//         }
//     }
// }

