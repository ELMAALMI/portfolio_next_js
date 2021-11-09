import styles from '@/styles/components/PortfolioSection.module.css'

const Folio = ()=>{
    return (
        <div className={`${styles.portfolio__content} grid`}>
            <img src="/img/portfolio1.jpg" alt="" className={styles.portfolio__img} />
            <div className={styles.portfolio__data}>
                <h3 className={styles.portfolio__title}>Modern WebSite</h3>
                <p className={styles.portfolio__description}>
                    website adaptable to amm devices, with ui 
                    components an animated interactions.
                </p>
                <a href='#' className={`btn btn__flex btn__small ${styles.portfolio__btns}`}>
                    Demo
                    <i className={`uil uil-arrow-right ${styles.portfolio__icon}`}></i>
                </a>
            </div>
        </div>
    )
}
export default Folio;