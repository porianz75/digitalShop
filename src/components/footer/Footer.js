import Newsletters from "./newsletters/Newsletters";
import Classes from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <Newsletters/>
            <div className={Classes.mainFooter}>
                <div className={`${Classes.footerContent} container`}>
                    <div>
                        <img className={Classes.logo} src='/images/logo/logo-white.png' alt='logo'/>
                        <p dir='ltr' className={Classes.phone}>+98919 893 6575</p>
                        <address className={Classes.address}>تهران , تهرانپارس ...</address>
                    </div>
                    <div className={Classes.footerNav}>
                        <div className={Classes.navSection}>
                            <h3>دسترسی سریع</h3>
                            <ul>
                                <li><a>خانه</a></li>
                                <li><a>محصولات</a></li>
                                <li><a>برندها</a></li>
                                <li><a>تخفیف های داغ</a></li>
                                <li><a>ویلاگ</a></li>
                            </ul>
                        </div>
                        <div className={Classes.navSection}>
                            <h3>دسترسی سریع</h3>
                            <ul>
                                <li><a>پروفایل</a></li>
                                <li><a>تاریخچه سفارش من</a></li>
                                <li><a>لیست علاقه مندی</a></li>
                                <li><a>رهگیری سفارش</a></li>
                                <li><a>سبدخرید</a></li>
                            </ul>
                        </div>
                        <div className={Classes.navSection}>
                            <h3>دسترسی سریع</h3>
                            <ul>
                                <li><a>درباره ما</a></li>
                                <li><a>حرفه</a></li>
                                <li><a>وبلاگ</a></li>
                                <li><a>کدهای تخفیف</a></li>
                                <li><a>تماس با ما</a></li>
                            </ul>
                        </div>
                        <div className={Classes.navSection}>
                            <h3>کمک</h3>
                            <ul>
                                <li><a>سرویس ها</a></li>
                                <li><a>پیدا کردن فروشگاه</a></li>
                                <li><a>حقوقی و حریم خصوصی</a></li>
                                <li><a>کارت هدیه</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;