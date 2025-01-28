import About from "../Components/About";
import Banner from "../Components/Banner";
import Benefits from "../Components/Benefits";
import Contact from "../Components/Contact";
import HowItWork from "../Components/HowItWork";
import Newsletter from "../Components/Newsletter";
import TopScholarship from "../Components/TopScholarship";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <HowItWork></HowItWork>
            <About></About>
            <Benefits></Benefits>
            <Contact></Contact>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomePage;