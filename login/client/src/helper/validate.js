import toast from 'react-hot-toast'

export async function usernameValidate(values){
    const errors = usernameVerify( {}, values);

    return errors;
}

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

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