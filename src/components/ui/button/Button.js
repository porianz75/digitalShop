import Classes from './Button.module.css'
function Button({children,fullWidth,style={},clickHandler,className,...props}){
    console.log(style)
    const btnClassName= [Classes.btn]

    if(fullWidth){
        btnClassName.push(Classes.fullWidth)
    }
    if(className){
        btnClassName.push(className)
    }
    return(
        <button className={btnClassName.join(' ')}
                style={style}
                onClick={clickHandler}
                {...props}
        >
            {children}
        </button>
    )
}
export default Button;