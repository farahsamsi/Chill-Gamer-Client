
import GameCard from "../Components/GameCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    const { theme } = useContext(AuthContext);
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedGenre, setSelectedGenre] = useState("all");

    useEffect(() => {
        if (selectedGenre !== 'all' && sortCriteria) {
            fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/filter&sort/${selectedGenre}?sort=${sortCriteria}`)
                .then(res => res.json())
                .then(data => setAllReviews(data))
        }
        else if (selectedGenre !== 'all') {
            fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/filter/${selectedGenre}`)
                .then(res => res.json())
                .then(data => setAllReviews(data))
        }
        else if (sortCriteria) {
            fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/sorted/${sortCriteria}`)
                .then(res => res.json())
                .then(data => setAllReviews(data))
        } else (
            fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews`)
                .then(res => res.json())
                .then(data => setAllReviews(data))
        )
    }, [selectedGenre, sortCriteria]);

    const genres = ['Adventure', 'Action', 'RPG', 'Simulation', 'Sports']

    // Filter handler
    const handleFilter = (genre) => {
        setSelectedGenre(genre);

    };

    // Sorting handler
    const handleSort = (criteria) => {
        setSortCriteria(criteria);

    };

    return (
        <div className="my-4 md:my-6 lg:my-8">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className={`text-2xl lg:text-5xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>All <span className="text-primary">REVIEWS</span></h1>
                <p className={`font-medium px-4 ${theme === 'light' ? '' : 'text-white'}`}>Chill Gamer is a review aggregator for video games. Chill Gamer collects review data from hundreds of online publications, blogs, and channels and compiles it all into one page. Chill Gamer&apos;s mission is to help consumers make more informed decisions when considering to pre order, buy, or play a game.</p>
            </div>
            <div className="mb-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Filter Dropdown */}
                <div className="w-full flex items-center justify-center">
                    <select
                        onChange={(e) => handleFilter(e.target.value)}
                        value={selectedGenre}
                        className="select select-bordered w-8/12"
                    >
                        <option value="all">All Genres</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Sort Dropdown */}
                <div className="w-full flex items-center justify-center">
                    <select
                        tabIndex={0} role="button"
                        onChange={(e) => handleSort(e.target.value)}

                        value={sortCriteria}
                        className="select select-bordered w-8/12 "
                    >

                        <option disabled value="">Sort by...</option>
                        <option value="rating">Rating</option>
                        <option value="year">Year</option>
                    </select>
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