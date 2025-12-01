import './DropDown.css'

function DropDown({style,children,openDirection='left'}){
    return (
        <div
            data-open-direction={openDirection}
            style={style && style}
             className='dropDown-container'
        >
            {children}
        </div>
    )
}
export default DropDown;