import { useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";
import { useState } from "react";

const HighestRatedGames = () => {
    const reviewsLoaded = useLoaderData();

    const [reviews, setReviews] = useState(reviewsLoaded);

    return (
        <div className="my-4 md:my-6 lg:my-8 container mx-auto">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold">HIGHEST <span className="text-primary">RATED GAMES</span></h1>
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews.map(review => <GameCard key={review._id} review={review}></GameCard>)
                }
            </div>
        </div>
    );
};

export default HighestRatedGames;