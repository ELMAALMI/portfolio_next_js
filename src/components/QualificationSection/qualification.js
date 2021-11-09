import styles from '@/styles/components/QualificationSection.module.css'
const Qualification = ({data}) => {
    const QualificationLine=({left,end})=>(
        <>
            {left?<div></div>:''}
            <div>
                <span className={styles.qualification__rounder}></span>
                {end?<span className={styles.qualification__line}></span>:''}
            </div>
        </>
    )
    return (
        <div className={styles.qualification__content}>
            {
                data.map((item,i)=>(
                    <div key={item.name} className={styles.qualification__data}>
                        {
                            (i+1)%2==0 ? <QualificationLine left={true} end={!(i===data.length-1)} />:''
                        }
                        <div>
                            <h3 className={styles.qualification__title}> {item.name} </h3>
                            <span className={styles.qualification__subtitle}> {item.school} </span>
                            <div className={styles.qualification__date}>
                                <i className="uil uil-calendar-alt"></i>
                                {item.year}
                            </div>
                        </div>
                        {
                            (i+1)%2==1 ? <QualificationLine left={false} end={!(i===data.length-1)} />:''
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Qualification
