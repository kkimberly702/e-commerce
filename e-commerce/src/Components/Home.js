import React from "react";
import './Home.css';
import Product from "../Product";




function Home() {
    return (
        <div className="home">
           
            <img className="home-img" src='images/makeup.png'/>


        <div className="home-row">
            <Product />
            <Product />
            <Product />
            {/* {Product} */}
        </div>

        <div className="home-row">
            {/* {Product} */}
            {/* {Product} */}
            {/* {Product} */}
        </div>

        <div className="home-row">
            {/* {Product} */}
            {/* {Product} */}
        </div>
        </div>
       

    )
}

export default Home;





