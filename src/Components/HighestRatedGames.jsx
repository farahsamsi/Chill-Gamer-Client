import { useLoaderData } from "react-router-dom";
import GameCard from "./GameCard";
import { useEffect, useState } from "react";

const HighestRatedGames = () => {
    const reviewsLoaded = useLoaderData();

    const [reviews, setReviews] = useState(reviewsLoaded);

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Toggle between showing all games or the first 6
        const displayedGames = showAll ? reviewsLoaded : reviewsLoaded.slice(0, 6);
        setReviews(displayedGames);
    }, [reviewsLoaded, showAll])

    const sortGamesByRating = (games) => {
        return games.sort((a, b) => b.rating - a.rating);
    }
    sortGamesByRating(reviewsLoaded);

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
            <div className="mt-4 w-11/12 mx-auto ">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn btn-block btn-outline hover:bg-primary hover:text-white">
                    {showAll ? "Show Less Games" : "Show All Games"}
                </button>
            </div>
        </div>
    );
};

export default HighestRatedGames;