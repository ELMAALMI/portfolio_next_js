import styles from '@/styles/components/ServiceSection.module.css'
import { useState } from 'react'

const Service = ({title,icon,items}) => {
    const [isopen,setIsopen] = useState(false);
    const handelIsopen = ()=>setIsopen(!isopen);
    return (
        <div className={styles.service__content}>
            <div>
                <i className={`uil ${icon} ${styles.service__icon}`}></i>
                <h3 className={styles.service__title}> {title} </h3>
            </div>
            <span onClick={handelIsopen} className={`btn bnt__flex btn__small btn__link ${styles.service_btn}`}>
                View More
                <i className={`uil uil-arrow-right ${styles.service__btn__icon}`}></i>
            </span>
            <div className={`${styles.service__modal} ${isopen?styles.open_modal:''}`}>
                <div className={styles.service__model__content}>
                    <h4 className={styles.modal__title}> {title} </h4>
                    <i onClick={handelIsopen} className={`${styles.modal__close} uil uil-times`}></i>
                    <ul className={`${styles.modal__services} grid`}> 
                       {
                           [1,2,3].map(item=>{
                               return(
                                <li key={item} className={styles.modal__service}>
                                    <i className={`uil uil-check-square ${styles.modal__icon}`}></i>
                                    <p>I develop the user Interface</p>
                                </li>
                               )
                           })
                       }     
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Service
