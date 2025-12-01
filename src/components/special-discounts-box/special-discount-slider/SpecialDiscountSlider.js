import Slider from "react-slick";
import ProductCard from "../../product-card/ProductCard";
import Classes from './SpecialDiscountSlider.module.css'
import {useState} from "react";
import ProductCardLoading from "../../ui/loadingSkeleton/ProductCardLoading";

function SpecialDiscountSlider({products}) {
const [currenSlide,setCurrentSlide]=useState(0)
        const settings = {
            dots: true,
            infinite: true,
            arrows:false,
            swipeToSlide: true,
            lazyLoad:true,
            speed: 500,
             autoplay: true,
            slidesToShow: 5,
            afterChange: current => setCurrentSlide(current),
            customPaging: i => (
                <div
                    className={`${Classes.customPaging} ${currenSlide===i ? Classes.activeSlide: null}`}
                >
                </div>
            ),
            appendDots: dots => (
                // این div استثنا کلاس قبول نمیکند
                <div
                    style={{
                        bottom: '-50px',
                    }}
                >
                    <ul className={Classes.dotList}> {dots} </ul>
                </div>
            ),
            touched:true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,

                    }
                },
                {
                    breakpoint: 1060,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
                <Slider {...settings} className={Classes.discountSlider}>
                    {products?.map(product=> (
                        <div className={Classes.sliderItem} key={product.id}>
                            <ProductCard product={product} borderPosition='outer'/>
                        </div>
                    )) || Array(5).fill({}).map((_,index)=> <div className={Classes.sliderItem} key={index}><ProductCardLoading/></div>)}
                </Slider>
        );

}

export default SpecialDiscountSlider;