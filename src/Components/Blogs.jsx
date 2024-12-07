import { Typewriter } from "react-simple-typewriter";
import BlogsCard from "./BlogsCard";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Blogs = () => {
    const { theme } = useContext(AuthContext);

    const latestBlogs = [
        {
            title: "The Rise of AI in Game Development",
            description:
                "Artificial intelligence is revolutionizing game development, from NPC behavior to procedural content creation. Developers are leveraging AI to create smarter opponents, dynamic environments, and personalized experiences for players. This transformation technology is reshaping how games are designed and played, opening new doors for innovation and immersion.",
            authorName: "Alex Carter",
            publishedDate: "2024-12-05",
            category: "Technology",
            image: "https://i.ibb.co.com/1mfvnyB/news1.jpg"
        },
        {
            title: "Top 5 Indie Games You Shouldn't Miss in 2024",
            description:
                "Indie games continue to captivate players with unique art styles and innovative mechanics. This year, standout titles like 'Celestial Voyage' and 'Mystic Depths' have taken center stage. These games showcase the creativity and passion of smaller developers, offering fresh experiences that rival big-budget productions.",
            authorName: "Jamie Peterson",
            publishedDate: "2024-11-30",
            category: "Indie Games",
            image: "https://i.ibb.co.com/D8qs7h1/news2.jpg"
        },
        {
            title: "E-Sports: The Billion-Dollar Industry in 2024",
            description:
                "E-sports has emerged as a global phenomenon, generating billions in revenue and attracting millions of viewers. With massive tournaments, skilled players, and enthusiastic fans, games like 'Valorant' and 'Dota 2' dominate the scene. The rapid growth highlights the potential of competitive gaming as mainstream entertainment.",
            authorName: "Chris Morgan",
            publishedDate: "2024-11-28",
            category: "E-Sports",
            image: "https://i.ibb.co.com/Z8wM5WH/news3.webp"
        },
        {
            title: "The Evolution of Open-World Games",
            description:
                "Open-world games have evolved dramatically, offering expansive landscapes, intricate stories, and endless exploration. Recent titles like 'The Legend of Zelda: Tears of the Kingdom' push the boundaries of creativity and immersion, setting new standards for the genre. The future of open-world gaming looks promising.",
            authorName: "Sophia Turner",
            publishedDate: "2024-12-01",
            category: "Game Design",
            image: "https://i.ibb.co.com/k3JpjGQ/news4.png"
        }
    ];


    return (
        <div className="mb-4 md:mb-6 lg:mb-8 container mx-auto mt-12">
            <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5 ">
                <h1 className={`text-2xl lg:text-5xl font-bold ${theme === 'light' ? '' : 'text-white'}`}>BLOGS <span className="text-primary"><Typewriter
                    words={["& NEWS"]}
                    loop={false}
                    typeSpeed={40}
                /></span></h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-11/12 mx-auto">
                {
                    latestBlogs.map((blog, idx) => <BlogsCard key={idx} blog={blog}></BlogsCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;