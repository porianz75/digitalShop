import Classes from './ParallaxBannerBox.module.css';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


function ParallaxBannerBox(){
    return (
        <MouseParallaxContainer className={Classes.container}>
            <MouseParallaxChild  className={Classes.parallaxBox} factorX={0.03} factorY={0.05}>
                <img src='images/parallax-banner-box/h3_banner-section-2.png' alt='accessories'/>
            </MouseParallaxChild >
            <div className={Classes.title}>
                <h4>صرفه جویی در عیدانه امسال</h4>
                <h2>برای سفارش بعدی خود 50 هزارتومان تخفیف دریافت کنید</h2>
            </div>
            <MouseParallaxChild  className={Classes.parallaxBox} factorX={0.03} factorY={-0.05}>
                <img src='images/parallax-banner-box/h3_banner-section-1.png' alt='phone'/>
            </MouseParallaxChild >
        </MouseParallaxContainer>
    )
}
export default ParallaxBannerBox;