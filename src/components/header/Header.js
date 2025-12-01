import HeaderTopBar from "./header-topbar/HeaderTopBar";
import HeaderNavBar from "./header-navbar/HeaderNavBar";
import HeaderDeskTop from "./header-deskTop/HeaderDeskTop";
import MobileFixedNavbar from "./mobile-fixed-navbar/MobileFixedNavbar";

function Header() {
    return (
        <>
            <HeaderTopBar/>
            <HeaderNavBar/>
            <HeaderDeskTop/>
            <MobileFixedNavbar/>
        </>
    )
}

export default Header;