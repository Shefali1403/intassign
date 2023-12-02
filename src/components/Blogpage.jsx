import React, { useEffect } from "react";
import Blogcard from "../Cards/Blogcard";
import Blogdata from "../Cards/Blogdata";
import { useState } from "react";
const Blogpage = () => {
  const imglist = ["blog1.jpeg", "blog2.webp", "blog3.3.jpg", "blog4.2.png"];
  const [initialImage, setImage] = useState(imglist[0]);
  useEffect(() => {
    const interv = setInterval(() => {
      const nextIndex = (imglist.indexOf(initialImage) + 1) % imglist.length;
      setImage(imglist[nextIndex]);
    }, 3000);
    return () => clearInterval(interv);
  }, [initialImage]);
  return (
    <>
      <div className="blog-container">
        <div
          className="blog-images"
          style={{ backgroundImage: `url('/images/${initialImage}')` }}
        ></div>
        <div className="blog-cards">
          {Blogdata.map((item) => (
            <Blogcard
              id={item.id}
              className={item.className}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Blogpage;
