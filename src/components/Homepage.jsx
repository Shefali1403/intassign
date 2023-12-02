import React from "react";
import Card from "../Cards/Card";
import Carddata from "../Cards/Carddata";
import Clientcard from "../Cards/Clientcard";
import Clientdata from "../Cards/Clientdata";
import Brand from "../Cards/Brand";
import Brandsdata from "../Cards/Brandsdata";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <div className="bg-image">
          <div className="head">
            <h1>Discover Today's Best Android Development Blogs</h1>
            <p>
              Read the conent Tech Twitter is talking about, without the noise.
            </p>
            <h5>
              BLOGGING FOR DEVS <i class="fa-brands fa-android"></i>
            </h5>
          </div>
        </div>
        <div className="blog-cards">
          {Carddata.map((val) => (
            <Card
              id={val.id}
              className={val.className}
              title={val.title}
              content={val.content}
            />
          ))}
        </div>
        <div className="client-sec">
          {Clientdata.map((val) => (
            <Clientcard
              id={val.id}
              img={val.img}
              text={val.text}
              name={val.name}
            />
          ))}
        </div>
        <div className="brands">
          <div className="brand-head">
            <h1>Our Brands</h1>
          </div>
          <div className="brand-box">
            {Brandsdata.map((val) => (
              <Brand id={val.id} className={val.className} img={val.img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
