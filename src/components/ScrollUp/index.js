import { useState,useEffect } from "react"

const ScrollUp = () => {
    const [show,SetShow] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            let hieght = window.pageYOffset; 
            hieght >= 560 ? SetShow(true): SetShow(false);
        })
    })
    return (
        <a href='#' className={`scrollup ${show?'scrollup__show':''}`}>
            <i className='uil uil-arrow-up'></i>
        </a>
    )
}

export default ScrollUp
