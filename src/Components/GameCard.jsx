import PropTypes from 'prop-types'
import ReactStars from "react-rating-stars-component";

const GameCard = ({ review }) => {
    const { _id, photo, name, year, userName, userEmail, description, rating, genre } = review;

    const firstExample = {
        size: 30,
        value: rating,
        color: "black",
        activeColor: "white",
        edit: false
    };

    return (
        <div className="grid grid-cols-1 relative">
            <div className="bg-black/40 py-4 absolute top-0 w-full z-50 ">

                <h1 className="text-white font-bold md:text-2xl ml-5 ">{name}</h1>

            </div>
            <div className="w-full h-80 md:h-96 lg:h-[30rem]">
                <img
                    src={photo}
                    className="w-full h-full object-cover" />
            </div>
            <button className="btn border-none rounded-none bg-primary text-white text-xl min-h-16  flex justify-center items-center px-5">
                Explore Details
                {/* <div>
                    <ReactStars key={_id} {...firstExample} />
                </div> */}
            </button>

        </div>
    );
};

GameCard.propTypes = {
    review: PropTypes.object
}

export default GameCard;