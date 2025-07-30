import GetInvolvedSection from "../components/GetInvolved";
import HeroLanding from "../components/HeroLanding";
import ImpactSection from "../components/ImpactSection";
import GallerySection from "../components/LandingGallery";
import MissionSection from "../components/OurMission";
import TestimonialSection from "../components/TestimonialSection";


const LandingPage = () => {

    return (
        <>
        <HeroLanding />
        <MissionSection />
        <ImpactSection />
        <GetInvolvedSection />
        <GallerySection />
        <TestimonialSection />
        </>
    )
}

export default LandingPage;