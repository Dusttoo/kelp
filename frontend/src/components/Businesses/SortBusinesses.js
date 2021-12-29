import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { average } from "../utils";

const GetCategory = ({sort}) => {
  const catId = sort;
  const businesses = useSelector((state) => state.business);
  const reviews = useSelector((state) => state.reviews);

  const getStars = (id) => {
    const starTotal = [];
    Object.values(reviews).forEach((review) => {
      if (review.businessId === id) {
        starTotal.push(review.stars);
      }
    });
    const stars = average(starTotal);

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, rate) => {
          rate += 1;
          return (
            <button
              type="button"
              key={rate}
              className={rate <= stars ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

  const matches = [];
  Object.values(businesses).map((business) => {
    if (business.categoryId === +catId) {
      matches.push(business);
    }
    return matches;
  });

  if (matches.length > 0) {
    return (
      <div className="businesses">
        {matches.map((business) => {
          !business.image.includes("https")
            ? (business.image =
                "https://mystickermania.com/cdn/stickers/memes/this-is-a-load-of-barnacles-meme-512x512.png")
            : (business.image = business.image);
          return (
            <div key={business.id} className="biz-listing">
              <Link to={`/${business.id}`}>
                <img
                  className="listing-img"
                  src={business.image}
                  alt={business.name}
                ></img>
                <p className="biz-link">{business.name}</p>
                <span className="stars">{getStars(business.id)}</span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  if (+catId === 0) {
    return (
      <div className="businesses">
        {Object.values(businesses).map((business) => {
          !business.image.includes("https")
            ? (business.image =
                "https://mystickermania.com/cdn/stickers/memes/this-is-a-load-of-barnacles-meme-512x512.png")
            : (business.image = business.image);
          return (
            <div key={business.id} className="biz-listing">
              <Link to={`/${business.id}`}>
                <img
                  className="listing-img"
                  src={business.image}
                  alt={business.name}
                ></img>
                <p className="biz-link">{business.name}</p>
                <span className="stars">{getStars(business.id)}</span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};

export default GetCategory;
