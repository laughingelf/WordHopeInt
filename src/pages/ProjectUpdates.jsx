import ProjectUpdates from "../components/ProjectUpdatesComp"
import HeroCommon from "../components/HeroCommon"

const ProjectUpdates = () => {

    return (

        <>
        <HeroCommon
        heading="Project Updates"
        subheading="See how faith in action is transforming Chemba, Tanzania — one seed, one brick, one life at a time."
        primaryCtaText="Donate to the Mission"
        primaryCtaLink="/donate"
        secondaryCtaText="Our Programs"
        secondaryCtaLink="/programs"
        backgroundImage="/img/feeding3.jpeg"
        />
        <ProjectUpdates />
        </>

    )
}