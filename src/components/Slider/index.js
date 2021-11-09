import { useState,useEffect } from "react";
import Slider from "react-slick";

const SliderShow = ({children}) => {
    const conf = {
        className:"slick_container",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '50px',
        autoplay:true,
        arrows : false,
        pauseOnHover: true,
        customPaging:function(){return(<img src="/img/not-open-dot.svg" className="dot-img" width="20px" />)}
      };
      const [config,setConfig] = useState(conf);
      useEffect(()=>{
        let width = window.innerWidth ;
        console.log(width)
        if(width <= 990){setConfig({...config,slidesToShow : 1})}
      },[])

    return (
        <Slider {...config}  >
            {children}
        </Slider>
    )
}

export default SliderShow
