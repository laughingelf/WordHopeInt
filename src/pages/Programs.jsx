import CallToActionSection from '../components/CallToAction';
import HeroCommon from '../components/HeroCommon'
import ProgramCategory from '../components/ProgramGrid';
import ProgramCategoryGrid from '../components/Programs';


const Programs = () => {

    return (
        <>
        <HeroCommon
        heading="Our Programs"
        subheading="From healing bodies to feeding families and equipping future leaders, discover how Word Hope International is making a lasting impact across Tanzania."
        backgroundImage="/img/programs.jpeg"
        />
        {/* <ProgramCategoryGrid /> */}
        <ProgramCategory />
        <CallToActionSection />
        </>
    )
}

export default Programs;