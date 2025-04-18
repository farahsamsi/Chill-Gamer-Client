import { Fade } from "react-awesome-reveal";
import AboutUs from "../Components/AboutUs";
import Blogs from "../Components/Blogs";
import HighestRatedGames from "../Components/HighestRatedGames";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Slider></Slider>
      {/* Highest Rated Game Section */}
      <HighestRatedGames></HighestRatedGames>
      {/* new section 1 */}
      <Fade>
        <Blogs></Blogs>
      </Fade>
      {/* new section 2 */}

      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
