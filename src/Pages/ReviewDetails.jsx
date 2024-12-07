import { useLoaderData } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { SiBigcartel } from "react-icons/si";
import { VscOpenPreview } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ReviewDetails = () => {
    const { user, theme } = useContext(AuthContext);
    // const { displayName, email } = user;
    const displayName = user?.displayName;
    const email = user?.email;


    const game = useLoaderData();
    const { _id, photo, name, year, userName, userEmail, description, rating, genre } = game;

    const handleWatchList = () => {
        const newWatchListItem = { name, photo, genre, rating, displayName, email } // send this data in DB in watchListCollection

        // send data to server
        fetch('https://assignment-ten-server-iota-five.vercel.app/watchList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatchListItem)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully added to your Watch List',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="mt-4 md:mt-6 lg:mt-8 mb-12">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className={`text-2xl lg:text-5xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>GAME <span className="text-primary">{name}</span></h1>
            </div>
            <div className="card p-6  w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border">
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
                                            <td className={`font-bold ${theme === 'light' ? 'text-black/55' : 'text-white'}`}>Genre :</td>
                                            <td>{genre}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td className="text-primary text-xl"><FaRegClock /></td>
                                            <td className={`font-bold ${theme === 'light' ? 'text-black/55' : 'text-white'}`}>Release Year :</td>
                                            <td>{year}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td className="text-primary text-xl"><FaRegStarHalfStroke /></td>
                                            <td className={`font-bold ${theme === 'light' ? 'text-black/55' : 'text-white'}`}>Rating :</td>
                                            <td>{rating}/5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {
                            user && <div className="flex justify-end">
                                <button onClick={handleWatchList} className="btn bg-primary text-white">
                                    <SiBigcartel />
                                    Add to WatchList</button>
                            </div>
                        }
                    </div>
                </div>
                {/* for game description */}
                <div className="mt-6 space-y-3">
                    <h1 className="text-xl lg:text-2xl font-extrabold">{name} <span className="text-primary">REVIEW</span></h1>
                    <div className="">
                        <p className="font-bold flex items-center gap-2">
                            <p className="text-primary text-xl"><VscOpenPreview /></p>
                            <p>Reviewed By :</p>
                            <p>{userName}</p>
                        </p>
                        <p className="font-bold flex items-center gap-2 flex-wrap">
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