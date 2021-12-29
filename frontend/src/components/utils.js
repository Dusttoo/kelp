export const placeholderImage = (business, image) => {
  if (!business.image.includes("https")) {
    const newImage = "https://i.imgur.com/P46aEKj.png";
    return newImage;
  } else {
    return image;
  }
};

export const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  
export const scroll = () => window.scrollTo(0, 0);

export const getStars = (stars) => {
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

export const checkOwner = (business, sessionUser) => {
  if (business.userId === sessionUser.id) {
    return true;
  } else return false;
};