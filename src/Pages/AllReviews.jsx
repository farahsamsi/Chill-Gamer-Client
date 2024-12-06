import { useLoaderData } from "react-router-dom";
import GameCard from "../Components/GameCard";
import { useState } from "react";

const AllReviews = () => {
    const loadedReviews = useLoaderData();

    const [allReviews, setAllReviews] = useState(loadedReviews);

    const [sortCriteria, setSortCriteria] = useState("");

    // Sorting handler
    const handleSort = (criteria) => {
        setSortCriteria(criteria);

        const sorted = [...allReviews].sort((a, b) => {
            return a[criteria] < b[criteria] ? 1 : -1;
        });

        setAllReviews(sorted);
    };

    return (
        <div className="my-4 md:my-6 lg:my-8">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold">All <span className="text-primary">REVIEWS</span></h1>
                <p className="font-medium text-black/80 px-4">Chill Gamer is a review aggregator for video games. Chill Gamer collects review data from hundreds of online publications, blogs, and channels and compiles it all into one page. Chill Gamer&apos;s mission is to help consumers make more informed decisions when considering to pre order, buy, or play a game.</p>
            </div>
            <div>
                {/* Sort Dropdown */}
                <div className="mb-6 w-11/12 mx-auto">
                    <div className="flex items-center gap-4">
                        <select
                            onChange={(e) => handleSort(e.target.value)}
                            value={sortCriteria}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option disabled value="">Sort by...</option>
                            <option value="rating">Rating</option>
                            <option value="year">Year</option>
                        </select>

                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allReviews.map(review => <GameCard key={review._id} review={review}></GameCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;