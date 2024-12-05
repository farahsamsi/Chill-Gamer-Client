import { useLoaderData } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { SiBigcartel } from "react-icons/si";
import { VscOpenPreview } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";

const ReviewDetails = () => {
    const game = useLoaderData();
    const { _id, photo, name, year, userName, userEmail, description, rating, genre } = game;


    return (
        <div className="mt-4 md:mt-6 lg:mt-8 mb-12">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold">GAME <span className="text-primary">{name}</span></h1>
            </div>
            <div className="card p-6 bg-base-100 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border">
                {/* grid for photo and summary */}
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6">
                    <div className="w-full h-80 md:h-96 lg:h-[30rem]">
                        <img
                            src={photo}
                            className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-xl lg:text-2xl font-extrabold">{name} <span className="text-primary">DETAILS</span></h1>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table md:text-xl">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td className="text-primary text-xl"><IoMdPricetags /></td>
                                            <td className="font-bold text-black/55">Genre :</td>
                                            <td>{genre}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td className="text-primary text-xl"><FaRegClock /></td>
                                            <td className="font-bold text-black/55">Release Year :</td>
                                            <td>{year}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td className="text-primary text-xl"><FaRegStarHalfStroke /></td>
                                            <td className="font-bold text-black/55">Rating :</td>
                                            <td>{rating}/5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn bg-primary text-white">
                                <SiBigcartel />
                                Add to WatchList</button>
                        </div>
                    </div>
                </div>
                {/* for game description */}
                <div className="mt-6 space-y-3">
                    <h1 className="text-xl lg:text-2xl font-extrabold">{name} <span className="text-primary">REVIEW</span></h1>
                    <div className="">
                        <p className="font-bold text-black/55 flex items-center gap-2">
                            <p className="text-primary text-xl"><VscOpenPreview /></p>
                            <p>Reviewed By :</p>
                            <p>{userName}</p>
                        </p>
                        <p className="font-bold text-black/55 flex items-center gap-2 flex-wrap">
                            <p className="text-primary text-xl"><MdAlternateEmail /></p>
                            <p>Contact Reviewer :</p>
                            <p>{userEmail}</p>
                        </p>
                    </div>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ReviewDetails;