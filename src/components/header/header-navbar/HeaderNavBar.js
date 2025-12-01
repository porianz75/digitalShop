import SearchBox from "../../searchBox/SearchBox";
import classes from "./HeaderNavBar.module.css";
import MobileOffcanvasMenu from "./mobileOffcanvasMenu/MobileOffcanvasMenu";
import UserStateIcon from "../../user-state-icon/UserStateIcon";
import InterestIcon from "../../interest-icon/InterestIcon";
import ShoppingBasketIcon from "../../shopping-basket-icon/ShoppingBasketIcon";

function HeaderNavBar() {
  return (
    <div className={classes.navBar + " container"}>
      <div className={classes.logo}>
        <a href="#">
          <img alt="logo" src={`${process.env.REACT_APP_SUB_DOMAIN}/images/logo/logo.png`} />
        </a>
      </div>
      <div className={classes.search}>
        <SearchBox />
      </div>
      <div className={classes.populateContainer}>
        <UserStateIcon order="row" />
        <InterestIcon order="row" />
        <ShoppingBasketIcon order="row" />
      </div>
      <MobileOffcanvasMenu />
    </div>
  );
}

export default HeaderNavBar;
