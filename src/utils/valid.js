export const validRegister = (email, password, cf_password ,chkbox) => {
    if(!email || !password || !cf_password || !chkbox)
        return 'Please add all fields.'

    if(!validateEmail(email))
        return 'Invalid emails.'

    if(password.length < 6)
        return 'Password must be at least 6 characters.'

    if(password !== cf_password)
        return 'Confirm password did not match.'
    return null
}

export const validLogin = (email, password) => {
    if(!email || !password)
        return 'Please add all fields.'

    if(!validateEmail(email))
        return 'Invalid emails.'

    if(password.length < 6)
        return 'Password must be at least 6 characters.'

    return null
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}