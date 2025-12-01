const testEmail = (value) => {
    const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    return emailPattern.test(value)
}


const testPhoneNumber = (value) => {
    const phoneNumberRegex=/^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/g;
    return phoneNumberRegex.test(value)
}

export default {
    testEmail,
    testPhoneNumber
}