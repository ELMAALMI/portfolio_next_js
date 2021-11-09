import styles from '@/styles/components/AboutSection.module.css'
const AboutSection = () => {
    const aboutInfo =[{
        year:'08+',
        fname:'Year',
        lname:'Experience'
    },
    {
        year:'20+',
        fname:'Complete',
        lname:'project'
    },{
        year:'01+',
        fname:'Company',
        lname:'worked'
    }];
    return (
        <section className={`${styles.about} section`}>
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className={`${styles.container} container grid`}>
                <img src='/img/about.jpg' alt='about image' className={styles.about__img} />
                <div className={styles.data}>
                    <p className={styles.description}>
                        Web & Mobile devloper, with extensive knowlege and year of experrizncz, working
                        in web and mobile technolgies ,delivering quality work
                    </p>
                    <div className={styles.about__info}>
                        {
                            aboutInfo.map(item=>{
                                return (
                                    <div key={item.lname}>
                                        <span className={styles.info__title}> {item.year} </span>
                                        <span className={styles.info__name}> {item.fname} <br/> {item.lname} </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.about__btns}>
                        <a href="#" className="btn btn__flex">
                           Dowload CV <i className={`uil uil-download-alt ${styles.icon__btn}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
