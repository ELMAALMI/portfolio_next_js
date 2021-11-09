import SliderShow from '../Slider';
import Folio from './folio'
import styles from '@/styles/components/PortfolioSection.module.css';

const PortfolioSection = () => {
        return (
        <section className={`${styles.portfolio} section`}>
            <h2 className={`section__title`}>Portfolio</h2>
            <span className="section__subtitle">Most Recent Work</span>
            <div className={`${styles.portfolio_container} container grid flex__container`}>
                <SliderShow>
                    {
                        [1,2,3,4,5,6].map(item=>(
                            <Folio key={item} />
                        ))
                    }
                </SliderShow>
            </div>
        </section>
    ) 
}

export default PortfolioSection
