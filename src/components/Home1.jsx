import React from "react";
// import DotsBg from "../assets/DotsBg.png";
// import shoeImage from "../assets/homeShoe.png";
import Slideshow from "./SlideShow";

const MyHome = () => {
    return (
        <>
            <Slideshow />
            <img className="banner" src="https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Center-Banner_1024x1024.jpg?v=1589039303" alt="banner"></img>

        </>
    );
};

export default MyHome;