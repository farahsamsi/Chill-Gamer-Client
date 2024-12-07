import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
    return (
        <div
            className="hero min-h-screen mb-4 md:mb-6 lg:mb-8 mt-12"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/j6gcPK6/clash.png)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="w-full text-white py-8">
                <div className="flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                    <h1 className="text-2xl md:text-5xl font-extrabold">C<Typewriter
                        words={["ONTACT"]}
                        loop={false}
                        typeSpeed={40}
                    /> <span className="text-primary"><Typewriter
                        words={[" US"]}
                        loop={false}
                        typeSpeed={40}
                        cursor
                    /></span></h1>
                </div>
                <section className=" text-white py-6">
                    <div className="container mx-auto flex justify-center space-x-6">
                        <FaFacebookF className="text-2xl cursor-pointer hover:text-yellow-500" />
                        <FaTwitter className="text-2xl cursor-pointer hover:text-yellow-500" />
                        <FaGooglePlusG className="text-2xl cursor-pointer hover:text-yellow-500" />
                        <FaYoutube className="text-2xl cursor-pointer hover:text-yellow-500" />
                        <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-500" />
                        <FaTwitch className="text-2xl cursor-pointer hover:text-yellow-500" />
                    </div>
                </section>
                <section className="relative py-12 mt-6 md:mt-12">
                    <div className="absolute inset-0 bg-primary opacity-60"></div>
                    <div className="relative container mx-auto text-center text-white z-10">
                        <h2 className="text-2xl font-extrabold mb-4">NEWSLETTER:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 w-11/12 mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="input input-bordered w-full bg-transparent rounded-none border-white placeholder-white"
                            />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered w-full bg-transparent rounded-none border-white placeholder-white"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered w-full bg-transparent rounded-none border-white placeholder-white"
                            />
                            <textarea
                                type="text"
                                placeholder="Your Massage"
                                className="input input-bordered textarea w-full bg-transparent rounded-none border-white placeholder-white"
                            />
                        </div>
                        <button className="btn btn-wide border-none bg-white text-primary hover:bg-black/80 hover:text-primary mt-5">
                            SUBMIT
                        </button>
                    </div>
                </section>


            </div>
        </div>

    );
};

export default AboutUs;