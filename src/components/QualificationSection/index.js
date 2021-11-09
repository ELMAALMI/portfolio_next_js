import styles from '@/styles/components/QualificationSection.module.css'
import { useState } from 'react';
import Qualification from './qualification';
const QualificationSection = () => {
    const educationProcess = [{
        name:'baccalaureate science physics',
        school:'Zaytoun high school',
        year:'2017 - 2018'
    },
    {
        name:'computer engineering DUT',
        school:'Meknes Higher School of Technology',
        year:'2018 - 2020'
    },{
        name:'computer engineering LP',
        school:'Meknes Higher School of Technology',
        year:'2020 - 2021'
    }];
    const works = [{
        name:'Sofware Enginner',
        company:'Upwork',
        year:'2019-2021'
    },{
        name:'Web & Mobile developer',
        company:'Upwork/Freelencer',
        year:'2021'
    }];
    const [eduTab,setEduTab]=useState(true);
    const [workTab,setWorkTab]=useState(false);
    const hedelTabOpen = (tab)=>{
        setEduTab(!eduTab);
        setWorkTab(!workTab);
    }
   
    return (
        <section className={`${styles.qualification} section`}>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className={`${styles.container} container`}>
                <div className={styles.qualification__tabs}>
                    <div onClick={()=>hedelTabOpen('edu')}  className={`${styles.qualification__btn} ${eduTab&&styles.active}  btn__flex`}>
                        <i className={`${styles.qualification__icon} uil uil-graduation-cap`}></i>
                        Education
                    </div>
                    <div onClick={()=>hedelTabOpen('work')} className={`${styles.qualification__btn} ${workTab&&styles.active} btn__flex`}>
                        <i className={`${styles.qualification__icon} uil uil-briefcase`}></i>
                        Work
                    </div>
                </div>
                <div className={styles.qualification__section}>
                    { eduTab?(<Qualification data={educationProcess} />):null}
                    { workTab?(<Qualification data={works} />):null}
                </div>
            </div>
        </section>
    )
}

export default QualificationSection
