import UnderConstruction from "../components/InProgress";
import GrowingFeedingPage from "../components/PFarming";
import HeroCommon from "../components/HeroCommon";

const ProgramsFarming = () => {

    return (
        <>
        <HeroCommon
        heading="Growing & Feeding Communities"
        subheading="Cultivating sustainable solutions to hunger through farming, training, and community development in Tanzania."
        backgroundImage="/img/food.jpeg"
        />

        <GrowingFeedingPage />
        </>
    )
}

export default ProgramsFarming;