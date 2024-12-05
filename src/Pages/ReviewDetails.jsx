import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
    const game = useLoaderData();

    return (
        <div>
            Review details : {game.name}
        </div>
    );
};

export default ReviewDetails;