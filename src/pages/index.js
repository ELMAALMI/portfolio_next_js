import Layout from "@/components/Layout"
import HomeSection from "@/components/HomeSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import QualificationSection from "@/components/QualificationSection"
import ServiceSection from "@/components/ServiceSection"
import PortfolioSection from '@/components/PortfolioSection'
import ProjectSection from '@/components/ProjectSection'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from "@/components/ContactSection"
const Home = ()=>{
  return (
    <Layout>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <QualificationSection/>
        <ServiceSection/>
        <PortfolioSection />
        <ProjectSection />
        <TestimonialSection/>
        <ContactSection/>
    </Layout>
  )
}
export default Home