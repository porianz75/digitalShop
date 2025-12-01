import classes from './OffcanvasMenu.module.css'
import {AiOutlineClose} from "react-icons/ai";
import OffcanvasMainTab from "./offcanvasMainTab/OffcanvasMainTab";
import OffcanvasBatchingTab from "./offcanvasBatchingTab/OffcanvasBatchingTab";
import {useState} from "react";

function OffcanvasMenu({isShow, onClose}) {
    const [tab, setTab] = useState('main')
    return (
        <div className={classes.containerMenu + ' ' + (isShow ? classes.show : '')}>
            <div>
                <div className={classes.closeMenu}>
                    <button onClick={onClose}>
                        <AiOutlineClose/>
                    </button>
                </div>
                <ul className={classes.menuTab}>
                    <li
                        onClick={() => {
                            setTab('main')
                        }}
                        className={tab === 'main' ? classes.active : ''}>
                        منوی اصلی
                    </li>
                    <li
                        onClick={() => {
                            setTab('batching')
                        }}
                        className={(tab === 'batching' ? classes.active : '') + ' flex-1' }>
                        دسته بندی محصولات
                    </li>
                </ul>
                {
                    tab === 'main' ?
                        <OffcanvasMainTab/> :
                        <OffcanvasBatchingTab/>
                }
            </div>

            {/*زبان*/}
        </div>
    )
}

export default OffcanvasMenu;
