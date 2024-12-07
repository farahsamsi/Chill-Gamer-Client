import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip'
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const MyReviews = () => {
    const reviews = useLoaderData();
    const { theme } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState(reviews);

    const handleDelete = _id => {
        console.log('after clicked', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
                                icon: "success"
                            });
                            const remaining = myReviews.filter(review => review._id !== _id);
                            setMyReviews(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="my-4 md:my-6 lg:my-8">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className={`text-2xl lg:text-5xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>MY <span className="text-primary">REVIEWS</span></h1>
                <p className="font-medium  px-4">Keep track of all your reviews in one place! Revisit your opinions, edit details, and manage your feedback on games you&apos;ve loved—or hated. Your reviews help shape the gaming community, so stay engaged and share your voice on the titles you’ve explored.</p>
            </div>
            <div className="card p-0 md:p-6  w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Game Name</th>
                                <th>
                                    <div className="hidden md:flex">Genre</div>
                                </th>
                                <th>
                                    <div className="hidden md:flex">Rating</div>
                                </th>
                                <th>Action buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row  */}
                            {
                                myReviews?.map(review => <tr key={review._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="hidden md:avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={review.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <Tooltip id="my-tooltip" />
                                                <div
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-place="right"
                                                    data-tooltip-content={`Genre:${review.genre},
                                                    Rating:${review.rating}/5`}
                                                    className="font-bold">{review.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="hidden md:flex">{review.genre}</div>
                                    </td>
                                    <td>
                                        <div className="hidden md:flex">{review.rating}/5</div>
                                    </td>
                                    <th>
                                        <Link to={`/updateReview/${review._id}`}>
                                            <button className="btn bg-primary text-white btn-xs">Update</button>
                                        </Link>
                                        <button onClick={() => handleDelete(review._id)} className="btn bg-red-500 text-white btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;