import Classes from "./ProductGalleryImages.module.css";
import Slider from "react-slick";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { CgArrowsExpandRight } from "react-icons/cg";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function ProductGalleryImages({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const settings = {
    beforeChange: (current, next) => setActiveIndex(next),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    touchMove: false,
  };

  return (
    <>
      <div style={{ marginBottom: "12px" }}>
        <Slider ref={sliderRef} {...settings} className={Classes.slier}>
          {product.images.map((item, index) => (
            <MouseParallaxContainer key={index} resetOnLeave className={Classes.slideItem}>
              <button onClick={() => setIsOpen(true)} className={Classes.btnLightBox}>
                <CgArrowsExpandRight />
              </button>
              <MouseParallaxChild factorX={0.7} factorY={0.7}>
                <img
                  src={`${process.env.REACT_APP_SUB_DOMAIN}/${item.url}`}
                  className={Classes.slideImg}
                  alt="product"
                />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          ))}
        </Slider>
        <div className={Classes.sliderDotContainer}>
          {product.images.map((item, index) => (
            <img
              alt="product slider dot"
              key={index}
              src={`${process.env.REACT_APP_SUB_DOMAIN}/${item.url}`}
              className={Classes.sliderDot}
              style={index === activeIndex ? { borderColor: "#dd2955" } : null}
              onClick={() => sliderRef.current.slickGoTo(index)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        index={activeIndex}
        close={() => setIsOpen(false)}
        slides={product.images.map(item => {
          return { src: item.url };
        })}
        plugins={[Fullscreen, Zoom]}
        zoom={{
          maxZoomPixelRatio: 6,
          zoomInMultiplier: 2,
        }}
      />
    </>
  );
}

export default ProductGalleryImages;
