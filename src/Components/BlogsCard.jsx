import PropTypes from 'prop-types'
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const BlogsCard = ({ blog }) => {
    const {
        title,
        description,
        authorName,
        publishedDate,
        category,
        image } = blog;
    return (
        <div className="card  w-full shadow-xl">
            <div className="w-full md:h-80">
                <img
                    src={image}
                    className="w-full h-full object-cover" />
            </div>
            <div className="card-body p-0 px-2 py-5">
                <h2 className="card-title text-2xl font-extrabold text-justify">{title}</h2>
                <p className='text-justify text-black/60'>{description}</p>
                <div className="card-actions justify-between">
                    <div className='flex items-center gap-1'>
                        <p className="text-primary text-xl"><FaRegPenToSquare /></p>
                        <p className="font-bold text-black/55">{authorName} </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className="text-primary text-xl"><FaFolderOpen /></p>
                        <p className="font-bold text-black/55">{category} </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className="text-primary text-xl"><MdDateRange /></p>
                        <p className="font-bold text-black/55">{publishedDate} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogsCard.propTypes = {
    blog: PropTypes.object
}

export default BlogsCard;