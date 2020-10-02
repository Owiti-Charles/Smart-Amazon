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
          image="https://ucarecdn.com/b10042ed-e33c-40da-af80-00d35a792e2a/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />{" "}
        <Product
          id={1}
          title="Super Bike"
          price={135000.0}
          rating={4}
          image="https://ucarecdn.com/2d94bb0f-edb7-458c-a9f7-4485199b023d/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="https://ucarecdn.com/59f8e90a-14d7-4c7b-b55c-f4a60cf79863/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="https://ucarecdn.com/59f8e90a-14d7-4c7b-b55c-f4a60cf79863/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />{" "}
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="https://ucarecdn.com/b10042ed-e33c-40da-af80-00d35a792e2a/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="https://ucarecdn.com/b10042ed-e33c-40da-af80-00d35a792e2a/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="https://ucarecdn.com/b10042ed-e33c-40da-af80-00d35a792e2a/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Safari Boots"
          price={35.0}
          rating={5}
          image="https://ucarecdn.com/b10042ed-e33c-40da-af80-00d35a792e2a/-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"
        />
      </div>
    </div>
  );
}

export default Home;
