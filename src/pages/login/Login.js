import Classes from './Login.module.css';
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
        let formIsValid = validateAllInputs()
        if(!formIsValid){
            return;
        }
        console.log('submit')
    }
    return (
        <div className='page'>
            <div className={Classes.container}>
                <div className={Classes.loginForm}>
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
                            ورود به آکسترونیک
                        </Button>
                    </form>
                    <div className={Classes.newMember}>
                        <p>کاربر جدید هستید؟</p>
                        <Link to='/register'>ثبت نام در آکسترونیک</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;