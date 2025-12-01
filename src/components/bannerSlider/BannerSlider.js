import Slider from "react-slick";
import './bannerSlider.css'
import Skeleton from 'react-loading-skeleton'

import CustomBannerSlide from "./custom-banner-slide/CustomBannerSlide";

const settings = {
    dots: true,
    fade: true,
    lazyLoad:true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: dots => (
        <div style={{bottom: '-5px',}}>
            <ul className='bannerSlider_dotContainer'> {dots} </ul>
        </div>
    ),
    customPaging: i => (<div className='bannerSlider_slierDot'> </div>)
};

function BannerSlider({data}) {

    return (
        <div className='bannerSlider_sliderContainer'>
            {data ?
                <Slider {...settings}>
                    {data?.map(slide=> <CustomBannerSlide key={slide.id} {...slide}/>)}
                </Slider>
                :
                <Skeleton style={{height:'100vh'}}/>
            }

        </div>
    )
}

export default BannerSlider;
