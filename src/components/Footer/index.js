import styles from '@/styles/components/Footer.module.css';

const Footer = props => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__bg}>
                <div className={`${styles.footer__container} container grid`}>
                    <div>
                        <h1 className={styles.footer__title}>EL</h1>
                        <span className={styles.footer__subtitle}>FullStack developer</span>
                    </div>
                    <ul className={styles.footer__links}>
                        <li>
                            <a href="#" className={styles.footer__links}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footer__links}>
                                portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footer__links}>
                                Blogs
                            </a>
                        </li>
                    </ul>
                    <div className={styles.footer__socails}>
                        <a href='' className={styles.footer__socail}>
                            <i className='uil uil-facebook-f'></i>
                        </a>
                        <a href='' className={styles.footer__socail}>
                            <i className='uil uil-instagram'></i>
                        </a>
                        <a href='' className={styles.footer__socail}>
                            <i className='uil uil-twitter-alt'></i>
                        </a>
                    </div>
                </div>
                <p className={styles.footer__copy}>&#169; Open Source Code </p>
            </div>
        </footer>
    )
}


export default Footer
