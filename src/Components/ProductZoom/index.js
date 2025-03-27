import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useRef } from 'react';

const ProductZoom = () =>{
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        if (zoomSlider.current && zoomSlider.current.slickGoTo) {
            zoomSlider.current.slickGoTo(index);
        }
        if (zoomSliderBig.current && zoomSliderBig.current.slickGoTo) {
            zoomSliderBig.current.slickGoTo(index);
        }
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        beforeChange: (current, next) => console.log("Slide change: ", next),
        afterChange: (current) => console.log("Current slide: ", current)
    };

    return(
        <div className="productZoom">
                    <div className='productZoom position-relative'>
                        <div className='badge badge-primary'>-50%</div>
                        <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'} alt="Product Modal Image" />
                            </div>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg'} alt="Product Modal Image" />
                            </div>
                            <div className='item'>
                                 <InnerImageZoom zoomType="hover" zoomScale={1} src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg'} alt="Product Modal Image" />
                            </div>
                        </Slider>
                    </div>
                    <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                        <div className='item'>
                            <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'} className='w-100' onClick={() => goto(0)} alt="Product Modal Small Image" />
                        </div>
                        <div className='item'>
                            <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg'} className='w-100' onClick={() => goto(1)} alt="Product Modal Small Image" />
                        </div>
                        <div className='item'>
                            <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg'} className='w-100' onClick={() => goto(2)} alt="Product Modal Small Image" />
                        </div>
                    </Slider>
                </div>
    )
}

export default ProductZoom;