import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating, ThinStar } from '@smastrom/react-rating'

const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const UpdateReview = () => {
    const { user, theme } = useContext(AuthContext);
    const loaded = useLoaderData();
    const { _id, photo, name, year: prevYear, userName, userEmail, description, rating: prevRating, genre: prevGenre } = loaded;

    const navigate = useNavigate();

    const [ratingTaken, setRatingTaken] = useState(parseFloat(prevRating));
    const handleRatingChange = (e) => {
        // setRating(e.target.value);

        setRatingTaken(e);
    };
    console.log(ratingTaken);

    const [genre, setGenre] = useState("");
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    const [year, setYear] = useState("");
    const yearsArray = [
        2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
        2019, 2020, 2021, 2022, 2023, 2024, 2025
    ];
    const handleYearChange = (e) => {
        setYear(e.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault();

        const photo = e.target.photo.value;
        const name = e.target.name.value;
        const year = e.target.year.value;
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const description = e.target.description.value;
        // const rating = e.target.rating.value;
        const rating = ratingTaken;
        const genre = e.target.genre.value;

        const updateReview = { photo, name, year, userName, userEmail, description, rating, genre };


        // update coffee data to the server
        fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Review updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                navigate(-1);
            })
    }

    return (
        <div className='w-11/12 container mx-auto '>
            <div className={`py-5 md:py-10 mb-6 md:mb-9 ${theme === 'light' ? 'bg-[#F4F3F0]' : 'bg-black/20'}`}>
                <div className='w-10/12 mx-auto'>
                    <div className='text-center'>
                        <h1 className={`text-2xl lg:text-5xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>UPDATE <span className="text-primary">Review</span></h1>
                        <p className='md:max-w-[930px] mx-auto my-4 md:my-6'>
                            Welcome <span className="text-primary">{userName}..</span>. Please feel free to update the review for game <span className="text-primary">{name}</span>.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {/* row 1 */}
                        <div className=''>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Cover Photo URL or Thumbnail URL</span>
                                </label>
                                <input name='photo' type="text" defaultValue={photo} placeholder="Enter Game Thumbnail Photo URL" className="input w-full" required />
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Game Title</span>
                                </label>
                                <input name='name' type="text" defaultValue={name} placeholder="Enter game name or title" className="input w-full" required />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Game Publishing Year</span>
                                </label>
                                <select name="year" className="input w-full" id="year" defaultValue={prevYear} onChange={handleYearChange}>
                                    <option disabled value="">Select Year</option>
                                    {yearsArray.map((year, index) => (
                                        <option key={index} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* row 3 */}
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Genre</span>
                                </label>
                                <select name="genre" className="input w-full" id="genre" defaultValue={prevGenre} onChange={handleGenreChange} required>
                                    <option value="">Select Genre</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Action">Action</option>
                                    <option value="RPG">RPG</option>
                                    <option value="Simulation">Simulation</option>
                                    <option value="Sports">Sports</option>
                                </select>
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Rating</span>
                                </label>
                                {/* <select name="rating" defaultValue={prevRating} className=" input w-full" id="rating" onChange={handleRatingChange} required>
                                    <option value="">Select a rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> */}
                                <span className="">
                                    <Rating style={{ maxWidth: 300 }} name='rating' value={ratingTaken} onChange={handleRatingChange} itemStyles={myStyles} />
                                </span>
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className=''>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Review Description</span>
                                </label>
                                <textarea name='description' defaultValue={description} type="text" placeholder="Write review description for the game" className="textarea input w-full" required />
                            </div>
                        </div>
                        {/* row 5 */}
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Your Name</span>
                                </label>
                                <input name='userName' type="text" value={`${user.displayName}`} className="input w-full" readOnly />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold ">Your Email</span>
                                </label>
                                <input name='userEmail' type="email" value={`${user.email}`} readOnly className="input w-full" required />
                            </div>
                        </div>

                        {/* row 6 */}
                        <div>
                            <button type='submit' className={`btn bg-primary border-none text-xl w-full ${theme === 'light' ? "text-white hover:text-black" : 'text-black hover:bg-white'}`}>Update Review</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateReview;