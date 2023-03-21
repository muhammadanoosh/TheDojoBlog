import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    

    

    return (
        <div className="home">
            {error && <div>{error}</div>}

            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;