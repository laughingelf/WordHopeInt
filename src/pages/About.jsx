import AboutFounderSection from "../components/AboutFounder";
import AboutMissionSection from "../components/AboutMission";
import HeroCommon from "../components/HeroCommon";


const About = () => {

    return (
        <>
        <HeroCommon
        heading="Who We Are"
        subheading="Word Hope International exists to bring holistic transformation to communities across Tanzania through the love of Christ."
        primaryCtaText="Donate Now"
        primaryCtaLink="/donate"
        secondaryCtaText="Programs"
        secondaryCtaLink="/programs"
        backgroundImage="/img/about-hero.jpeg"
        />
        <AboutMissionSection />
        <AboutFounderSection />

        
        </>
    )
}

export default About;