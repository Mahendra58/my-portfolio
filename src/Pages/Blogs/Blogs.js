
import Blogs from "../../Components/Blogs/Blogs"
import { Helmet } from "react-helmet";


const Blogs1 = () => {
    const blogs = [];


    return (
        <>
            <Helmet>
                <text>Blogs</text>
                <meta type="description" content="A list of blogs and posts." />
                <meta type="keywords" content="Blogs, Mahendra Singh" />
            </Helmet>
            <div className="home">
                <Blogs blo={blogs} />
            </div>
        </>
    )
}

export default Blogs1