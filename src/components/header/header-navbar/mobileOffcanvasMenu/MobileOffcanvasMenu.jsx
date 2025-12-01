import {BiMenu} from "react-icons/bi";
import classes from "./MobileOffcanvasMenu.module.css";
import {useState,useEffect} from "react";
import OffcanvasMenu from "./offcanvasMenu/OffcanvasMenu";
import Overlay from "../../../ui/overlay/Overlay";
import {useLocation} from "react-router-dom";

function MobileOffcanvasMenu() {
    const [isShow, setIsShow] = useState(false)
const location = useLocation();

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[])

    useEffect(()=>{
        setIsShow(false)

    },[location])

    function handleResize(){
        if(window.innerWidth > 992){
            setIsShow(false)
        }
    }
    const handleClick = () => {
        setIsShow(prevState => !prevState)
    }

    return (
        <>
            <BiMenu className={classes.burgerMenu} onClick={handleClick}/>
            <Overlay show={isShow} onClose={()=>setIsShow(false)}/>
            <OffcanvasMenu isShow={isShow} onClose={()=> setIsShow(false)}/>
        </>
    )
}

export default MobileOffcanvasMenu;