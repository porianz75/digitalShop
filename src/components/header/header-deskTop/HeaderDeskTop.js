import Classes from './HeaderDeskTop.module.css'
import {CgPhone} from 'react-icons/cg'
import {Link} from "react-router-dom";
import {RiArrowDownSLine, RiArrowLeftSLine} from "react-icons/ri";
import DropDown from "../../ui/dropDown/DropDown";
import {BiGlassesAlt, BiMenu} from "react-icons/bi";
import {FiMonitor, FiSmartphone} from "react-icons/fi";
import {FaHeadphonesAlt} from "react-icons/fa";
import {TbDeviceWatchStats, TbDiscount2} from "react-icons/tb";
import {IoLogoGameControllerB} from "react-icons/io";
import {BsArrowDown} from "react-icons/bs";
import {AiOutlineUserAdd} from "react-icons/ai";



function HeaderDeskTop() {
    return (
        <div className={Classes.HeaderDeskTop}>
            <div className={`container ${Classes.HeaderContainer}`}>

                <button className={`${Classes.batchingBtn} dropDown`}>
                    <BiMenu className={Classes.batchingBurgerIcon}/>
                    <p className={Classes.batchingTitle}>دسته بندی محصولات</p>
                    <RiArrowDownSLine className={Classes.arrowDownIcon}/>
                    <DropDown>
                        <ul className='dropBox'>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <FiMonitor className={Classes.dropDownItemIcon}/>
                                    <span>
                               لوازم جانبی و کامپیوتر
                            </span>
                                    <RiArrowLeftSLine className={Classes.arrowDownIcon}/>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <FiSmartphone className={Classes.dropDownItemIcon}/>
                                    <span>
                            تلفن همراه
                             </span>
                                    <RiArrowLeftSLine className={Classes.arrowDownIcon}/>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <FaHeadphonesAlt className={Classes.dropDownItemIcon}/>
                                    <span>
                                هدفون
                            </span>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <BiGlassesAlt className={Classes.dropDownItemIcon}/>
                                    <span>
                               تکنولوژی
                            </span>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <TbDeviceWatchStats className={Classes.dropDownItemIcon}/>
                                    <span>
                                ساعت هوشمند
                            </span>
                                    <RiArrowLeftSLine className={Classes.arrowDownIcon}/>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <IoLogoGameControllerB className={Classes.dropDownItemIcon}/>
                                    <span>
                                کنسول بازی
                            </span>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <TbDiscount2 className={Classes.dropDownItemIcon}/>
                                    <span>
                                تخفیف های ویژه
                            </span>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <BsArrowDown className={Classes.dropDownItemIcon}/>
                                    <span>
                                پرفروش ترین ها
                            </span>
                                </Link>
                            </li>
                            <li className={Classes.dropDownItem}>
                                <Link to='/'>
                                    <AiOutlineUserAdd className={Classes.dropDownItemIcon}/>
                                    <span>
                                فروشنده شوید
                            </span>
                                </Link>
                            </li>
                        </ul>
                    </DropDown>
                </button>

                <ul className={Classes.navbar}>
                    <li className='dropDown'>
                        <Link to='/'>
                            <span>صفحه اصلی</span>
                        </Link>
                    </li>
                    <li className='dropDown'>
                        <span>فروشگاه</span>
                        <RiArrowDownSLine className={Classes.navbarIcon}/>
                        <DropDown style={{width: '220px'}}>
                            <ul className={Classes.dropDownMenu}>
                                <li>
                                    <Link to='/'>
                                <span>
                                محصولات گروهی هوشمند
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                محصول ساده
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                محصول متغیر
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                محصول ناموجود
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                محصول گروهی
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                    محصول خارجی/بازاریابی
                                </span>
                                    </Link>
                                </li>
                            </ul>
                        </DropDown>

                    </li>
                    <li className='dropDown'>
                        <span>فروشگاه دکان</span>
                        <RiArrowDownSLine className={Classes.navbarIcon}/>
                        <DropDown style={{width: '220px'}}>
                            <ul className={Classes.dropDownMenu}>
                                <li>
                                    <Link to='/'>
                                <span>
                                    لیست فروشگاه
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                    جزئیات فروش
                                </span>
                                    </Link>
                                </li>
                            </ul>
                        </DropDown>

                    </li>
                    <li className='dropDown'>
                        <span>برگه ها</span>
                        <RiArrowDownSLine className={Classes.navbarIcon}/>
                        <DropDown style={{width: '220px'}}>
                            <ul className={Classes.dropDownMenu}>
                                <li>
                                    <Link to='/'>
                                <span>
                                درباره ما
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                سوالات متداول
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                لیست علاقه مندی ها
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                محتوا
                                </span>
                                    </Link>
                                </li>
                            </ul>
                        </DropDown>

                    </li>
                    <li className='dropDown'>
                        <span>وبلاگ</span>
                        <RiArrowDownSLine className={Classes.navbarIcon}/>
                        <DropDown style={{width: '220px'}}>
                            <ul className={Classes.dropDownMenu}>
                                <li>
                                    <Link to='/'>
                                <span>
                                وبلاگ
                                </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                <span>
                                نوشته وبلاگ
                                </span>
                                    </Link>
                                </li>
                            </ul>
                        </DropDown>

                    </li>
                    <li>
                        <span>درباره ما</span>
                    </li>

                </ul>

                <div className={Classes.callWithUs}>
                    <CgPhone className={Classes.callIcon}/>
                    <p>با ما تماس بگیرید:</p>
                    <p>09909090xxx</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderDeskTop;