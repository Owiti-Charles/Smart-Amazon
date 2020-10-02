import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* https://ucarecdn.com/a55e2960-2f91-48f9-b418-4185725489c2/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/ */}
      {/* https://ucarecdn.com/e7c19fc3-c52f-4a8a-b8f2-0219ddb105df/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/ */}
      {/* https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg */}
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home_row">
        <Product
          id={1}
          title="Safari Boots"
          price={3500.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />{" "}
        <Product
          id={1}
          title="Super Bike"
          price={135000.0}
          rating={4}
          image="https://www.motorcyclespecs.co.za/Gallery_A-L_16/damon-hypersport-01.jpg"
        />
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />{" "}
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="http://uniformdistributorsltd.com/wp-content/uploads/2014/08/safari-boots.png"
        />
      </div>
    </div>
  );
}

export default Home;
