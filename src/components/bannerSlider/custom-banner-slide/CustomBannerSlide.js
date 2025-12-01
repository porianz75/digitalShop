import "./CustomBannerSlide.css";
import { Link } from "react-router-dom";

function CustomBannerSlide({ title, price, off, imgSrc }) {
  return (
    <div dir="rtl" className="bannerSlider_Container-sliderItem">
      <div
        style={{ backgroundImage: `url(${process.env.REACT_APP_SUB_DOMAIN}/${imgSrc})` }}
        className="bannerSlider_sliderItem"
      ></div>
      <div className="bannerSlider_slide-overlay">
        <span className="bannerSlider_slide-overlay-badge">فروش ویژه</span>
        <h1 className="bannerSlider_slide-overlay-title">{title}</h1>
        <div className="bannerSlider_slide-overlay-content">
          <p>قیمت اصلی {price} میلیون تومان</p>
          <p>{off} تخفیف</p>
        </div>

        <button className="bannerSlider_slide-overlay-btn">
          <Link to="/"> همین الان بخرید</Link>
        </button>
      </div>
    </div>
  );
}

export default CustomBannerSlide;
