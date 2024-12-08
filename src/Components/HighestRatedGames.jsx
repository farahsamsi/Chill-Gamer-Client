import { Link, useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "./AuthProvider/AuthProvider";

const HighestRatedGames = () => {
    const reviewsLoaded = useLoaderData();
    const { theme } = useContext(AuthContext);

    return (
        <div className="my-4 md:my-6 lg:my-8 container mx-auto">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className={`text-2xl lg:text-5xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>HIGHEST
                    <span className="text-primary">
                        <Typewriter
                            words={[" RATED GAMES"]}
                            loop={false}
                            typeSpeed={40}
                        />
                    </span></h1>
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviewsLoaded.map(review => <GameCard key={review._id} review={review}></GameCard>)
                }
            </div>
            <div className="mt-4 w-11/12 mx-auto">
                <Link
                    to='/allReviews'
                    className="btn btn-block btn-outline hover:bg-primary hover:text-white">
                    Show All Games
                </Link>
            </div>
        </div>
    );
};

export default HighestRatedGames;