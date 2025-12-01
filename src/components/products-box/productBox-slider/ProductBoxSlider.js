import Slider from "react-slick";
import ProductCard from "../../product-card/ProductCard";
import Classes from './ProductBoxSlider.module.css';
import ProductCardLoading from "../../ui/loadingSkeleton/ProductCardLoading";

function ProductBoxSlider({products}) {
    const settings = {
        infinite: true,
        arrows:false,
        lazyLoad:true,
        speed: 400,
        autoplay: true,
        swipeToSlide: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1040,
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
        <Slider {...settings} className={Classes.productBoxSlider}>
            {products?.map(product=> (
                <div className={Classes.sliderItem} key={product.id}>
                    <ProductCard product={product} borderPosition='inner'/>
                </div>
            )) ||
            Array(4).fill({}).map((_,index)=> <div className={Classes.sliderItem} key={index}><ProductCardLoading/></div>)}
        </Slider>
    );
}

export default ProductBoxSlider;