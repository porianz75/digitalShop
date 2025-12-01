import classes from './Overlay.module.css'

function Overlay(props) {
    return (
        props.show ? (<div
            className={classes.overlay}
            onClick={props.onClose}>
        </div>) : null

    )
}

export default Overlay;