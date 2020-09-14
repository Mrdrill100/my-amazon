import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="Fuji_TallHero_Computers_1x._CB432469755_.jpg" 
        alt="" />

        <div className="home__row">
          <Product
            id=""
            title="Gaming computer"
            price={0}
            rating={5}
            image="shopping.png"
          />
          <Product 
          id=""
          title="Gaming computer"
          price={0}
          rating={5}
          image="shopping (2).png"
          />

          <Product
          id="" 
          title="Gaming computer"
            price={0}
            rating={5}
            image="shopping (3).png" 
            />

        </div>

        <div className="home__row">
          <Product
          id=""
           title="Gaming computer"
           price={0}
           rating={5}
           image="shopping (4).png" 
           />

          <Product 
          id=""
           title="Gaming computer"
           price={0}
           rating={5}
           image="shopping (5).png" 
           />

          <Product
          id=""
           title="Gaming computer"
           price={0}
           rating={5}
           image="shopping (2).png" 
           />

        </div>

        <div className="home__row">
          <Product 
          id="" 
          title="Gaming computer"
          price={0}
          rating={5}
          image="shopping (1).png"
          />

          <Product 
          id="" 
          title="Gaming computer"
          price={0}
          rating={5}
          image="shopping (6).png"
          />

          <Product  title="Gaming computer"
          id=""
          price={0}
          rating={5}
          image="shopping (7).png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
