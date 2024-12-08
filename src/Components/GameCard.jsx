import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoMdPricetags } from 'react-icons/io';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const GameCard = ({ review }) => {
    const { theme } = useContext(AuthContext);
    const { _id, photo, name, year, rating, genre } = review;
    const { pathname } = useLocation();

    const [active, setActive] = useState(true);
    useEffect(() => {
        if (pathname !== "/") {
            setActive(false);
        } else {
            setActive(true);
        }
    }, [pathname]);


    const firstExample = {
        size: 30,
        value: rating,
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
            {
                active ? <div className='flex justify-center items-center border-x border-primary'>
                    <ReactStars key={_id} {...firstExample} />
                </div>
                    : <div className="overflow-x-auto border-x border-primary">
                        <table className="table md:text-xl">
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td className="text-primary text-xl"><IoMdPricetags /></td>
                                    <td className={`font-bold ${theme === 'light' ? 'text-black/55' : 'text-white'}`}>Genre:</td>
                                    <td>{genre}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td className="text-primary text-xl"><FaRegClock /></td>
                                    <td className={`font-bold ${theme === 'light' ? 'text-black/55' : 'text-white'}`}>Release Year:</td>
                                    <td>{year}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td className="text-primary text-xl"><FaRegStarHalfStroke /></td>
                                    <td className={`font-bold ${theme === 'light' ? 'text-black/55' : 'text-white'}`}>Rating:</td>
                                    <td>{rating}/5</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex justify-center items-center border-t'>
                            <ReactStars key={_id} {...firstExample} />
                        </div>
                    </div>
            }

            <Link to={`/reviewDetails/${_id}`} className="btn border-none rounded-none bg-primary text-white text-xl min-h-16  flex justify-center items-center px-5">
                Explore Details

            </Link>

        </div>
    );
};

GameCard.propTypes = {
    review: PropTypes.object
}

export default GameCard;