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
            <Blogs></Blogs>
            {/* new section 2 */}
        </div>
    );
};

export default Home;