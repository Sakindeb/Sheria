import toast from 'react-hot-toast'

export async function usernameValidate(values){
    const errors = usernameVerify( {}, values);

    return errors;
}

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password does not match");
    }
    return errors;
}

/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}
/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}
function passwordVerify(error = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        error.password = toast.error('Password required')
    } else if( values.password.includes(" ")){
        error.password = toast.error('Invalid password')
    } else if( values.password<5){
        error.password = toast.error('Password is too short')
    }else if(!specialChars.test(values.password)){
        error.password = toast.error("Password must have special character");
    }

    return error;

}
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username required...!')
    } else if(values.username.includes(" ")){
        error.username = toast.error('Username is not valid...!')
    }
    return error;

}
/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}