import { useState } from "react";
import { useLoaderData } from "react-router-dom";
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
                <p className="font-medium text-black/80 px-4">Chill Gamer is a item aggregator for video games. Chill Gamer collects item data from hundreds of online publications, blogs, and channels and compiles it all into one page. Chill Gamer&apos;s mission is to help consumers make more informed decisions when considering to pre order, buy, or play a game.</p>
            </div>
            <div className="card p-6 bg-base-100 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Game Name</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th>Action buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row  */}
                            {
                                watchList?.map(item => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.genre}

                                    </td>
                                    <td>{item.rating}/5</td>
                                    <th>

                                        <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 text-white btn-xs">Delete From Watch List</button>
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