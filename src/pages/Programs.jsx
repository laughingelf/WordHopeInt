import CallToActionSection from '../components/CallToAction';
import HeroCommon from '../components/HeroCommon'
import ProgramCategoryGrid from '../components/Programs';


const Programs = () => {

    return (
        <>
        <HeroCommon
        heading="Our Programs"
        subheading="From healing bodies to feeding families and equipping future leaders, discover how Word Hope International is making a lasting impact across Tanzania."
        backgroundImage="/img/programs.jpeg"
        />
        <ProgramCategoryGrid />
        <CallToActionSection />
        </>
    )
}

export default Programs;