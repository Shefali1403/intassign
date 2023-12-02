import React from "react";
const Aboutpage = () => {
  return (
    <>
      <div className="about-container">
        <div className="company">
          <div className="company-content">
            <div className="logo">
              <img
                src="https://assets.stickpng.com/thumbs/5847f3f0cef1014c0b5e4886.png"
                alt="not found"
              />
            </div>
            <div className="conten">
              <h1>Hire India's Best Android App Development Company</h1>
              <p>
                Our Android app development experts commit to developing
                tech-driven top notch Android applications to suit a variety of
                global bussinesses. Providing error-free & cost-effective mobile
                app solutions, iWebServices designs and develops custom Android
                apps with flawless UX & UI for all types of industries
              </p>
            </div>
          </div>
          <div className="company-img">
            <img src={process.env.PUBLIC_URL + "/images/aboutbg1.png"} alt="" />
          </div>
        </div>
        <div className="mission">
          <div className="mission-content">
            <h1>Our Mission</h1>
            <p>
              {" "}
              🍃Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, voluptates possimus doloremque, facere, similique
              fugiat eum unde labore cupiditate libero laudantium! Alias
              consequuntur perferendis numquam eum! Sunt unde aliquam,
              necessitatibus rem dignissimos iure porro quod deleniti, natus
              numquam repellendus aperiam ea odit doloremque ex animi. Voluptas
              earum ea incidunt odit! Lorem ipsum dolor sit amet, voluptatibus
              voluptate repellendus nostrum mollitia consequuntur? Incidunt
              officia suscipit a totam molestias fuga.🍃
            </p>
          </div>
          <div className="mission-img">
            <img
              src={process.env.PUBLIC_URL + "/images/mission.png"}
              alt="not-found"
            />
          </div>
        </div>
        <div className="team">
          <div className="team-head">
            <h1>Meet our Team</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing eliteaque
              aliquam cupiditate sed quis possimus quia. Maiores suscipit
              accusamus culpa nihil.
            </p>
          </div>
          <h1>
            <b>Leadership</b>
          </h1>
          <div className="team-pics">
            <div className="box1">
              <img
                src={process.env.PUBLIC_URL + "/images/team1.avif"}
                alt="not found"
              />
            </div>
            <div className="box2">
              <img
                src={process.env.PUBLIC_URL + "/images/team2.png"}
                alt="notfound"
              />
            </div>
            <div className="box3">
              <img
                src={process.env.PUBLIC_URL + "/images/team3.jpeg"}
                alt="not found"
              />
            </div>
          </div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
};
export default Aboutpage;
