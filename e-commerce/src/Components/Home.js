import React from "react";
import './Home.css';
import Product from "../Product";




function Home() {
    return (
        <div className="home">
           
            <img className="home-img" src='images/makeup.png'/>


        <div className="home-row">
            <Product 
                brand="NYX Professional Makeup" 
                title="Soft Matte Lip Cream" 
                price={10.99} 
                image={'images/Nyx-lipcream.png'} 
                rating={2}/>
            
            
            <Product 
                brand="NYX Professional Makeup" 
                title="Soft Matte Lip Cream" 
                price={10.99} 
                image={'images/Nyx-lipcream.png'} 
                rating={2}/>
        </div>

        <div className="home-row">
        <Product 
                brand="NYX Professional Makeup" 
                title="Soft Matte Lip Cream" 
                price={10.99} 
                image={'images/Nyx-lipcream.png'} 
                rating={2}/>
           
        </div>

        <div className="home-row">

            {/* {Product} */}
            {/* {Product} */}
        </div>
        </div>
       

    )
}

export default Home;





