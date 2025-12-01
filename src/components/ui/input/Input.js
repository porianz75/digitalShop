import Classes from './Input.module.css';

function Input({value,onChangeHandler,name,label,type,error,endAdornment,touched,onBlurHandler}){
    let errorClassName= error ? Classes.errorBorder : '';
    return(
        <>
            <label htmlFor={name} className={Classes.label}>{label}</label>
            <div className={Classes.inputWrapper}>
                <input
                    value={value}
                    onChange={(event)=>onChangeHandler(event,name)}
                    onBlur={(event)=>onBlurHandler(event,name)}
                    id={name}
                    name={name}
                    type={type}
                    className={`${Classes.input} ${errorClassName}`}
                />
                <div className={Classes.endAdornment}>
                    {endAdornment}
                </div>
            </div>

            {touched && error && <p className={Classes.errorText}>{error}</p>}
        </>
    )
}

export default Input;