import Overlay from "../overlay/Overlay";
import classes from './Modal.module.css'
import {AiOutlineClose} from "react-icons/ai";

function Modal({show,onClose,children}){

    return (
        <>
            <Overlay show={show} onClose={onClose}/>
            <div
                className={classes.modal}
                style={{
                    transform: show ? 'translate(0,0)' : 'translate(0,-100vh)',
                    opacity: show ? '1' : '0',
                }}
            >
                {children}
               <button
                   className={classes.btnClose}
                   onClick={onClose}
               >
                   <AiOutlineClose/>
               </button>
            </div>
        </>
    )
}
export default Modal;