import Classes from './Register.module.css';
import Input from "../../components/ui/input/Input";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import Button from "../../components/ui/button/Button";
import useForm from "../../hooks/useForm";
import {Link} from 'react-router-dom'

function Login() {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const {formState,inputChangeHandler,inputBlurHandler,validateAllInputs,errors}=useForm({
            name:{
                value:'',
                touched:false,
                validations:{
                    required:true,
                    min:5
                },
                isValid:true
            },
            phoneNumber:{
                value:'',
                touched:false,
                validations:{
                    required:true,
                    isPhone:true
                },
                isValid:true
            },
            password:{
                value:'',
                touched:false,
                validations:{
                    required:true,
                    min:7
                },
                isValid:true
            },
        },
        true)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handlesubmit')
        let formIsValid = validateAllInputs()
        console.log('formIsValid',formIsValid)
        if(!formIsValid){
            return;
        }
        console.log('submit')
    }
    return (
        <div className='page'>
            <div className={Classes.container}>
                <div className={Classes.RegisterForm}>
                    <div className={Classes.logo}>
                        <Link to='/'>
                            <img src='images/logo/logo.png' width={160} height={40} alt='logo site'/>
                        </Link>
                    </div>
                    <form
                        autoComplete='off'
                        onSubmit={handleSubmit}
                    >
                        <div className={Classes.formControl}>
                            <Input
                                value={formState.inputs.name.value}
                                onChangeHandler={inputChangeHandler}
                                onBlurHandler={inputBlurHandler}
                                touched={formState.inputs.name.touched}
                                label='نام کاربری خود را وارد کنید'
                                name='name'
                                type='text'
                                error={errors?.name}
                            />
                        </div>
                        <div className={Classes.formControl}>
                            <Input
                                value={formState.inputs.phoneNumber.value}
                                onChangeHandler={inputChangeHandler}
                                onBlurHandler={inputBlurHandler}
                                touched={formState.inputs.phoneNumber.touched}
                                label='شماره تلفن همراه خود را وارد کنید'
                                name='phoneNumber'
                                type='tel'
                                error={errors?.phoneNumber}
                            />
                        </div>
                        <div className={Classes.formControl}>
                            <Input
                                value={formState.inputs.password.value}
                                onChangeHandler={inputChangeHandler}
                                onBlurHandler={inputBlurHandler}
                                touched={formState.inputs.password.touched}
                                label='رمز عبور خود را وارد کنید'
                                name='password'
                                type={PasswordInputType}
                                error={errors?.password}
                                endAdornment={formState.inputs.password.value && ToggleIcon}
                            />
                        </div>
                        <Button
                            disabled={!formState.formIsValid}
                            style={{marginBlock: '16px'}}
                            fullWidth
                        >
                            ثبت نام در آکسترونیک
                        </Button>
                    </form>
                    <div className={Classes.newMember}>
                        <p>قبلا ثبت نام کرده اید؟</p>
                        <Link to='/login'>ورود به آکسترونیک</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;