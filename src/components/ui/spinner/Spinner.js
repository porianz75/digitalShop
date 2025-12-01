import Classes from './Spinner.module.css'

function Spinner({size}){
    return (
        <div className={Classes.spinnerContainer}>
            <div className={Classes.spinner} style={{'--size':size}}>
            </div>
        </div>

    )
}

export default Spinner;