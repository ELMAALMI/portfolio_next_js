import { useState } from 'react';
import styles from '@/styles/components/SkillsSection.module.css'

const skill = ({title,skill,icon}) => {
    const [isopen,setIsopen]=useState(false)
    const handelDrop = (e)=>setIsopen(!isopen);
    return (
        <div className={`${styles.skills__content}`}>
            <div className={styles.skills__header}>
                <i className={`${icon} ${styles.skills__icon}`}></i>
                <h1 className={styles.skills__title}> {title} </h1>
                <i onClick={handelDrop} className={`uil uil-angle-down ${styles.skills__icon__arrow} ${isopen?styles.skills__close__arrow:''}`}></i>
            </div>
            {
                isopen?(
                    <div className={`${styles.skills__list} grid`}>
                    {
                        skill.map(item=>{
                            return(
                                <div key={item} className={styles.skills__data}>
                                    <div className={styles.skills__titles}>
                                        <h3 className={styles.skills__name}> {item} </h3>
                                        <span className={styles.skills__number}>100%</span>
                                    </div>
                                    <div className={styles.skills__bar}>
                                        <span className={styles.skills__percentage}></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                ):null
            }
        </div>
    )
}

export default skill
