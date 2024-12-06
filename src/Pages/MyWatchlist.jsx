import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const MyWatchlist = () => {
    const loadedWatchList = useLoaderData();
    const [watchList, setWatchList] = useState(loadedWatchList);

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
                fetch(`https://assignment-ten-server-iota-five.vercel.app/watchList/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            const remaining = watchList.filter(item => item._id !== _id);
                            setWatchList(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="my-4 md:my-6 lg:my-8">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className="text-2xl lg:text-5xl font-extrabold">MY <span className="text-primary">WATCH LIST</span></h1>
                <p className="font-medium text-black/80 px-4">Save your favorite games and keep an eye on upcoming titles! Manage your watch list, track ratings, and never miss the games you’re excited about. Build your personal collection of must-play games and explore them at your pace.</p>
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
                                watchList?.map(item => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="hidden md:avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <Tooltip id="my-tooltip" />
                                                <div
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-place="right"
                                                    data-tooltip-content={`Genre:${item.genre},
                                                    Rating:${item.rating}/5`}
                                                    className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="hidden md:flex">{item.genre}</div>
                                    </td>
                                    <td>
                                        <div className="hidden md:flex">{item.rating}/5</div>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 text-white btn-xs">
                                            Delete
                                            <span className="hidden md:flex">From Watch List</span></button>
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

export default MyWatchlist;