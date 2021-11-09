import Skill from './skill';
import styles from '@/styles/components/SkillsSection.module.css'
const SkillsSection = () => {
    const frontEndTech = ["Html","Css","React js","Vue js","Next js"];
    const backEndTech = ['Php','Java','javascript','Nest js','Express js','Laravel','Spring']
    const mobileTech = ['ReactNative','Flutter','android'];
    const databaseTech = ['Oracle','MySQL','MongoDB']
    return (
        <section className={`${styles.skills} section`}>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className={`${styles.container} container grid`}>
                <Skill title="Frontend Developer" icon="uil uil-brackets-curly" skill={frontEndTech} />
                <Skill title="Backend Developer" icon="uil uil-server-network" skill={backEndTech} />
                <Skill title="Mobile Developer" icon="uil uil-mobile-android " skill={mobileTech} />
                <Skill title="Database Developer" icon="uil uil-database" skill={databaseTech} />
            </div>
        </section>
    )
}

export default SkillsSection
