import styles from '@/styles/components/TestimonialSection.module.css';
import Testimonial from './Testimonial';
import SliderShow from '@/components/Slider'
const TestimonialSection = () => {
    return (
        <section className={`${styles.testimonial} section`}>
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle"> What Client Saying</span>
            <div className={`${styles.testimonial__container} container`}>
                <SliderShow>
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </SliderShow>
            </div>
        </section>
    )
}

export default TestimonialSection
