// const myProgram = function () {
//     const myBox = document.getElementById(`my-form-box`);
//     myBox.addEventListener(`click`, function (evClick) {
//         try {
//             const ele = evClick.target;
//             const eleClass = ele.getAttribute('class');
            
//             switch (eleClass) {
//                 case 'bleh':
//                     alert(`bleh geclick`);
//                     break;
//                 case 'bleh1':
//                     alert('bleh 1 geclick');
//                     break;
//                 default:
//                     alert('not hit');
//                     break;
//             }
//             console.log(eleClass);
//         } catch (error) {
//             console.dir(error);
//         }
//     });
// }



// myProgram();

// window[`hetgeklik`] = function () {
//     alert("poeskop");
// }


// const login_page = function () {

// }


// const LoginChecking = function() {
//     document.getElementById('email-input').value = sEmail;

//     const FormBox = document.getElementById('form-box');
//     FormBox.addEventListener('click', function(evClick)) {
//         try{
            
//         }
//     }
    
// }

var
sEmail = '';
sPassword= '';

const FormBox = document.getElementById('form-box');

document.getElementById('email-input').value = sEmail;
document.getElementById('password-input').value = sPassword;
   
    function btnClicked(){
    console.log(sEmail);
    }

     FormBox.addEventListener('click', btnClicked);

        
        


     
