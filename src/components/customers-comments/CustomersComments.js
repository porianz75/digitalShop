import Classes from './CustomersComments.module.css';
import CustomersCommentsCard from "./customers-comments-card/CustomersCommentsCard";
import Slider from 'react-slick';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import {useRef} from "react";
import CustomersCommentsCardLoading from "../ui/loadingSkeleton/CustomersCommentsCardLoading";

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    rtl:true,
    // autoplay: true,
    arrows:false,
    responsive: [
        {
            breakpoint: 1144,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 690,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

function CustomersComments({comments}) {
    const sliderRef = useRef(null);

    function nextSlideHandler(){
        sliderRef.current.slickNext()
    }
    function prevSlideHandler(){
        sliderRef.current.slickPrev()
    }

    return (
        <>
            <h1 className={Classes.title}>نظرات مشتریان عزیز</h1>
            <Slider {...settings} ref={sliderRef}>
                {comments?.map(comment=>(
                    <div className={Classes.slide} key={comment.id}>
                        <CustomersCommentsCard comment={comment}/>
                    </div>
                )) ||
                Array(4).fill({}).map((_,index)=> <div className={Classes.slide} key={index}><CustomersCommentsCardLoading/></div>)
                }
            </Slider>
            <div className={Classes.sliderController}>
                <button
                    className={Classes.nextBtn}
                    onClick={nextSlideHandler}
                >
                    <BsArrowRight/>
                </button>
                <button
                    className={Classes.prevBtn}
                    onClick={prevSlideHandler}
                >
                    <BsArrowLeft/>
                </button>
            </div>

        </>
    )
}


export default CustomersComments;