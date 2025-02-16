import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* banner  */}
            <Banner />
            {/* title */}
            <Heading title={"Browse coffees by category"}
                subtitle={"Choose your desire coffee category to borwse through specefic coffee that fiAt for you"} />
            {/* category tab section */}
            <Categories categories={categories} />
            <Outlet/>
            {/* dynamic content */}
        </div>
    );
};

export default Home;