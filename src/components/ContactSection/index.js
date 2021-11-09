import styles from '@/styles/components/ContactSection.module.css'
const ContactSection = () => {
    return (
        <section className={`${styles.contact} section`}>
            <h1 className='section__title'>Contact me</h1>
            <span className='section__subtitle'>Get in touch</span>
            <div className={`${styles.contact__container} container grid`}>
                <div>
                    <div className={styles.contact__information}>
                        <i className={`uil uil-phone ${styles.contact__icon}`}></i>
                        <div>
                            <h3 className={styles.contact__title}>Call me</h3>
                            <span className={styles.contact__subtitle}>+212 654669788</span>
                        </div>
                    </div>
                    <div className={styles.contact__information}>
                        <i className={`uil uil-envelope ${styles.contact__icon}`}></i>
                        <div>
                            <h3 className={styles.contact__title}>Email</h3>
                            <span className={styles.contact__subtitle}>elmaalmibillal@gmail.com</span>
                        </div>
                    </div>
                    <div className={styles.contact__information}>
                        <i className={`uil uil-map-marker ${styles.contact__icon}`}></i>
                        <div>
                            <h3 className={styles.contact__title}>Localisation</h3>
                            <span className={styles.contact__subtitle}>Meknes ,Moracain</span>
                        </div>
                    </div>
                </div>
                <form action='' className={`${styles.contact__form} grid`}>
                    <div className={`${styles.contact__inputs} grid`}>
                        <div className={styles.contact__content}>
                            <label htmlFor='name'>Name</label>
                            <input id='name' name='name' type='text' className={styles.contact__input} />
                        </div>
                        <div className={styles.contact__content}>
                            <label htmlFor='email'>Email</label>
                            <input id='email' name='email' type='email' className={styles.contact__input} />
                        </div>
                        <div className={styles.contact__content}>
                            <label htmlFor='project'>Project</label>
                            <input id='project' name='project' type='text' className={styles.contact__input} />
                        </div>
                        <div className={styles.contact__content}>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message' className={styles.contact__input} cols={0} rows={7}></textarea>
                        </div>
                        <div>
                            <button className={`btn btn__flex`} style={{
                                border: 'none'
                            }}>
                                Send Message
                                <i className={`uil uil-message ${styles.btn__icon}`}></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
