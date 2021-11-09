import styles from '@/styles/components/ProjectSection.module.css';

const ProjectSection = () => {
    return (
        <section className={`${styles.project} section`}>
            <div className={styles.project__bg}>
                <div className={`${styles.project__container} conatiner grid`}>
                    <div className={styles.project__data}>
                        <h2 className={styles.project__title}>You have a new project</h2>
                        <p className={styles.project__description}>Contact me and get 30% discount on your new project.</p>
                        <a className={`btn btn__flex btn__white`}>
                            Contact me
                            <i className={`uil uil-message ${styles.project__icon} ${styles.btn__icon}`}></i>
                        </a>
                    </div>
                    <img alt="" src='/img/project.png' className={styles.project__img} />
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
