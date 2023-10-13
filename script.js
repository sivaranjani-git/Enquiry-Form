const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const enquiryform = document.querySelector('#enquiry form');


form.addEventListener('submit',(e)=>{
   e.preventDefault();
   validateInputs();
})

function validateInputs(){
    const usernameVal=username.ariaValueMax.trim()
    const emailVal=username.ariaValueMax.trim();
    const passwordVal=username.ariaValueMax.trim();
    const cpasswordVal=username.ariaValueMax.trim();
    const enquiryformVal=username.ariaValueMax.trim();
    let Success= true

    if(usernameVal===''){
        success=false;
       setError(username,'user is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success=false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success=false;
       setError(email,'Please  enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal === ''){
        success=false;
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'password must  be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    return success;

    if(cpasswordVal!==password){
        setError(cpassword,'Confirm password is required')
    }
    else  if(cpasswordVal!==passwordVal){
        setError(cpassword,'password does not  match')
    }
    else{
        setSuccess(cpassword)
    }
}    
//element -password,msg- pwd is reqd
function setError(element,message){
     const inputGroup = element.parentElement;
     const errorElement = inputGroup.querySelector('.error')

     errorElement.innerText = message;
     inputGroup.classList.add('error')
     inputGroup.classList.remove('Success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('Success')
    inputGroup.classList.remove('Success')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            //((.()[0]\.,;:\s@"]+()[\]\\.,,;:\^/s@")*)|(".+")@((\[[0-9]]))
        );
};
