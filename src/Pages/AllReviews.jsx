import { useLoaderData } from "react-router-dom";
import GameCard from "../Components/GameCard";

const AllReviews = () => {
    const allReviews = useLoaderData();
    return (
        <div className="my-4 md:my-6 lg:my-8">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold">All <span className="text-primary">REVIEWS</span></h1>
                <p className="font-medium text-black/80 px-4">Chill Gamer is a review aggregator for video games. Chill Gamer collects review data from hundreds of online publications, blogs, and channels and compiles it all into one page. Chill Gamer&apos;s mission is to help consumers make more informed decisions when considering to pre order, buy, or play a game.</p>
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