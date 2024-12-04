import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <img className="" src="https://i.ibb.co.com/pzR8DLn/404-page-cover.jpg" alt="error 404" />
            <Link to='/'><button className="btn bg-primary text-white absolute top-[45%] right-[35%]">Home</button></Link>
        </div>
    );
};

export default ErrorPage;