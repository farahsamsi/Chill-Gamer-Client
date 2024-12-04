
const GameCard = () => {
    return (
        <div className="grid grid-cols-1 relative">
            <div className="bg-black/40 py-4 absolute top-0 w-full z-50 ">

                <h1 className="text-white font-bold md:text-2xl ml-5 ">Title</h1>

            </div>
            <div className="w-full h-72">
                <img
                    src=''
                    className="w-full h-full object-cover" />
            </div>
            <div className="bg-white min-h-20  flex justify-between items-center">
                <p>Description</p>
            </div>

        </div>
    );
};

export default GameCard;