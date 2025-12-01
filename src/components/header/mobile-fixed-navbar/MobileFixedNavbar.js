import Classes from './MobileFixedNavbar.module.css';
import UserStateIcon from "../../user-state-icon/UserStateIcon";
import ShoppingBasketIcon from "../../shopping-basket-icon/ShoppingBasketIcon";
import InterestIcon from "../../interest-icon/InterestIcon";
import {Link} from "react-router-dom";
import {BsShop} from "react-icons/bs";
import {RiSearchLine} from "react-icons/ri";
import Modal from "../../ui/modal/Modal";
import SearchBox from "../../searchBox/SearchBox";
import {useState} from "react";

function MobileFixedNavbar() {
    const [isOpen,setIsOpen]=useState(false)


    return (
        <ul className={Classes.containerMenu}>
            <li>
                <Link to='/shop'>
                    <div className={Classes.shop}>
                        <BsShop className={Classes.shopIcon}/>
                        <p className={Classes.shopTitle}>فروشگاه</p>
                    </div>
                </Link>
            </li>
            <li>
                <UserStateIcon/>
            </li>
            <li>
                <div
                    className={Classes.mobileSearch}
                    onClick={()=>setIsOpen(true)}
                >
                    <RiSearchLine className={Classes.searchIcon}/>
                    <p>جتسجو</p>
                </div>

                <Modal show={isOpen} onClose={()=>setIsOpen(false)}>
                    <div className={Classes.searchContainer}>
                        <SearchBox/>
                    </div>
                </Modal>
            </li>
            <li>
                <ShoppingBasketIcon/>
            </li>
            <li>
                <InterestIcon/>
            </li>
        </ul>
    )
}

export default MobileFixedNavbar;