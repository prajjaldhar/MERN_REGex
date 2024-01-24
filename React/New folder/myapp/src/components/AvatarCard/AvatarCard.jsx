import React from "react";
import "./AvatarCard.css";
import datas from "../../utils/data.js";

const AvatarCard = () => {
  return (
    <section className="section__container customer__container" id="client">
      <h2 className="section__header">
        Inspiring stories from our
        <br />
        satisfied customers
      </h2>
      {/* Slider main container */}
      <div className="swiper">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {datas.map((data, index) => (
            <div className="swiper-slide" key={data.id}>
              <div className="customer__card">
                <img
                  src={data.imageSrc}
                  alt="customer"
                  className="customer__image"
                />
                <img
                  src={data.userImageSrc}
                  alt="customer user"
                  className="customer__user"
                />
                <div className="customer__card__content">
                 {data.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvatarCard;
