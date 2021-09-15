import React from "react";
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
        alt=""
      />
    
      <div className="home_row">
      <Product
        id="123456"
        title="Up to 70% off | Electronics clearance store"
        price={50.99}
        rating={5}
        image="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
      />
      <Product
        id="123456"
        title="The Lean Startup: How Constant Innovation"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />
      <Product
        id="123456"
        title="Up to 70% off | Electronics clearance store"
        price={70}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg"
      />
     
      
      </div>
      <div className="home_row">
      <Product
        id="123456"
        title="Up to 70% off | Electronics clearance store"
        price={8.79}
        rating={5}
        image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
      />
      <Product
        id="123456"
        title="The Lean Startup: How Constant Innovation"
        price={4.90}
        rating={5}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_2X_4._SY608_CB667376048_.jpg"
      />

         
      </div>
    </div>
  );
}

export default Home;
