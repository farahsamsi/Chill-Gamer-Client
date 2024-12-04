import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";

function Slider() {
    const slides = [
        {
            title: "Gloria Soccer 2018",
            description:
                "Football, Tactics & Glory is a sports video game that was released in 2018 for Windows and later ported to consoles in 2020.",
            platform: "Origin, Playstation 4",
            category: "Sports",
            image: "url('https://i.ibb.co.com/59GSMCP/slide1.jpg')",
        },
        {
            title: "FIFA World Cup 2022",
            description:
                "Experience the thrill of the FIFA World Cup with cutting-edge graphics and gameplay innovations.",
            platform: "PC, Xbox, Playstation 5",
            category: "Sports",
            image: "url('https://i.ibb.co.com/x8LC3GN/slide2.webp')",
        },
        {
            title: "Pro Soccer League",
            description:
                "The ultimate soccer simulation game with real-time strategies and dynamic gameplay.",
            platform: "Nintendo Switch, PC",
            category: "eSports",
            image: "url('https://i.ibb.co.com/Y2Wq3XQ/slide3.webp')",
        },
        {
            title: "Street Soccer Challenge",
            description:
                "Join the street soccer revolution and show off your freestyle skills in this action-packed game.",
            platform: "Mobile, PC",
            category: "Street Sports",
            image: "url('https://i.ibb.co.com/ZM6hbvB/slide4.webp')",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically change slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel w-full h-screen overflow-hidden relative py-5">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 duration-1000 ${index === currentSlide ? "z-10" : "z-0"
                        }`}
                    style={{
                        backgroundImage: slide.image,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-6 max-w-2xl">
                            <div className="flex items-center justify-around">
                                <p className="uppercase text-sm flex items-center gap-2">
                                    <span className="text-primary text-2xl"><FaLaptopCode /></span>{slide.platform}</p>
                                <p className="uppercase flex items-center gap-2">
                                    <span className="text-primary text-2xl"><FaTags /></span>{slide.category}</p>
                            </div>
                            <h2 className="text-5xl font-extrabold my-4">{slide.title}</h2>
                            <p className="text-lg mb-4">{slide.description}</p>
                            <div className="flex justify-center items-center gap-8">
                                <button className="border-b hover:text-primary hover:border-b-primary p-4">Game Details</button>
                                <button className="border-b hover:text-primary hover:border-b-primary p-4">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Carousel controls */}
            <div className="absolute bottom-6 flex justify-center w-full space-x-2 z-50">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Slider;
