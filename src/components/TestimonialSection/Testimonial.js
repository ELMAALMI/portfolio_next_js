import styles from '@/styles/components/TestimonialSection.module.css';

const Testimonial = () => {
    return (
      
            <div className={styles.testimonial__content}>
                <div className={styles.testimonial__data}>
                    <div className={styles.testimonial__name__star}>
                        <div className={styles.testimonial__header}>
                            <img src="/img/testimonial1.jpg" className={styles.testimonial__img} />
                            <div>
                                <h3 className={styles.testimonial__name}>Sara smith</h3>
                                <span className={styles.testimonial__client}>Client</span>
                            </div>
                        </div>
                        <div>
                            <i className='uil uil-star'></i>
                            <i className='uil uil-star'></i>
                            <i className='uil uil-star'></i>
                            <i className='uil uil-star'></i>
                        </div>
                    </div>
                    <p className={styles.testimonial__description}>
                        I get a good impression
                    </p>
                </div>
            </div>
    )
}

export default Testimonial
