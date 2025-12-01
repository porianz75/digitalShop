import regex from "./regex";

function validator(value,rules,identifier){
    console.log(value)
    let nameField =''
    if(identifier === 'name'){
        nameField = 'نام کاربری'
    } else if(identifier === 'email'){
        nameField= 'ایمیل'
    }else if(identifier==='phoneNumber'){
        nameField='شماره تلفن'
    }else if(identifier ==='password'){
        nameField ='رمز عبور'
    }

   let isValid = true;
    let error='';

    if(rules.email && !regex.testEmail(value)){
        error ='فرمت ایمیل وارد شده اشتباه می باشد';
        isValid=false;
    }
    console.log(regex.testPhoneNumber(value))
    if (rules.isPhone && !regex.testPhoneNumber(value)){
        error = 'شماره تلفن وارد شده اشتباه میباشد'
        isValid=false
    }

    if(rules.min && value.length < rules.min){
        error = ` حداقل کاراکتر مجاز برای فیلد ${nameField} برابر با ${rules.min} میباشد `
        isValid =false
    }

    if(rules.required && value === ''){
        error =` فیلد ${nameField} الزامی میباشد `;
        isValid =false
    }
    return {error,isValid}
}

export default validator;