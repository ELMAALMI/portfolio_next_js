import Service from './service'
import styles from '@/styles/components/ServiceSection.module.css'

const ServiceSection = () => {
    return (
        <section className={`${styles.service} section`}>
            <h2 className={`section__title`}>Services</h2>
            <span className="section__subtitle">What i offer</span>
            <div className={`${styles.service_container} container grid`}>
                <Service title="Front end Designer" icon="uil-arrow"  />  
                <Service title="Back end Developer" icon="uil-arrow"  />  
                <Service title="Mobile Developer" icon="uil-arrow"  />  
                <Service title="Database Developer" icon="uil-arrow"  />  
            </div>
        </section>
    ) 
}

export default ServiceSection
