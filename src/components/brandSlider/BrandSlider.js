import Slider from 'react-slick';
import Classes from './BannerSlider.module.css';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable:false,
    arrows:false,
     autoplay: true,
    cssEase: "linear",
    pauseOnHover:false,
    speed: 4500,
    autoplaySpeed: 4500,
    responsive: [
        {
            breakpoint: 1144,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
}
const data=[
    {src:'images/brandSlider/brand-1.svg', alt:'brand-1'},
    {src:'images/brandSlider/brand-2.svg', alt:'brand-2'},
    {src:'images/brandSlider/brand-3.svg', alt:'brand-3'},
    {src:'images/brandSlider/brand-4.svg', alt:'brand-4'},
    {src:'images/brandSlider/brand-5.svg', alt:'brand-5'},
]
function BrandSlider(){
    return(
        <Slider {...settings}>
            {data.map((item,index)=>(
                <div key={index} className={Classes.slide}>
                    <img src={item.src} alt={item.alt}/>
                </div>
            ))}

        </Slider>
    )
}

export default BrandSlider;