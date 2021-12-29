import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddQuestion from "../Questions/AddQuestionModal";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DeleteBusiness from "../Businesses/DeleteBusiness";
import Reviews from "../Reviews/ReviewList";
import "./Businesses.css";
import AddReview from "../Reviews/AddReview";
import Questions from "../Questions/QuestionsList";
import GoogleMap from "../GoogleMap/Map";
import { getQuestions } from "../../store/questions";

const Businesses = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state?.business);
  const sessionUser = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users);
  const reviews = useSelector((state) => state.reviews);
  const categories = useSelector((state) => state.categories);
  const questions = useSelector((state) => state.questions);
  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const eachUser = [];
  const eachBusiness = [];
  const eachReview = [];
  const eachCategory = [];
  const eachQuestion = [];
  Object.values(businesses).map((business) => eachBusiness.push(business));
  const business = eachBusiness.find((oneBusiness) => +id === oneBusiness.id);

  Object.values(categories).map((category) => eachCategory.push(category));
  const category = eachCategory.find(
    (oneCategory) => oneCategory.id === business.categoryId
  );

  Object.values(users).map((user) => eachUser.push(user));
  const user = eachUser.find((oneUser) => business.userId === oneUser.id);

  Object.values(questions).map((question) => eachQuestion.push(question));

  Object.values(reviews).map((review) => eachReview.push(review));
  const starTotal = [];
  eachReview.forEach((review) => {
    if (review.businessId === business.id) {
      starTotal.push(review.stars);
    }
  });

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  window.scrollTo(0, 0);

  const placeholderImage = (image) => {
    if (!business.image.includes("https")) {
      const newImage = "https://i.imgur.com/P46aEKj.png";
      return newImage;
    } else {
      return image;
    }
  };

  const stars = average(starTotal);

  const getStars = () => {
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

  const checkOwner = () => {
    if(businesses[id].userId === sessionUser.id) {
      return true
    } else return false
  }

  checkOwner()

  return (
    <div>
      <div
        className="biz-info"
        style={{
          backgroundImage: "url(" + placeholderImage(business.image) + ")",
        }}
      >
        <div className="header-left">
          <h1 className="biz-title">{business.name}</h1>
          <div className="header-subinfo">
            {!stars ? <p className="stars">No Reviews</p> : getStars()}
            <p className="category-header">{category.category}</p>
          </div>
        </div>
      </div>
      <div className="main">
        {sessionUser ? (
          <div className="add-buttons">
            {sessionUser.id === business.userId ? (
              <div className="your-business">
                <Link to={`/businesses/${id}`} className="add-biz">
                  Edit your Business:
                </Link>
                <DeleteBusiness />
              </div>
            ) : (
              <span></span>
            )}
          </div>
        ) : (
          <div></div>
        )}

        <div className="location-section">
          <div className="location-left-side">
            <h2 className="section-header">Location</h2>
            <div>
              <GoogleMap business={business} />
            </div>
            <h3>Location:</h3>
            <p>{business.address}</p>
          </div>
          <div className="location-right-side">
            <div className="hours-left">
              <span className="day">Sunday</span>
              <span className="hour">Sun: 12pm - 8pm</span>
              <span className="day">Monday</span>
              <span className="hour">Mon: 12pm - 8pm</span>
              <span className="day">Tuesday</span>
              <span className="hour">Tue: 12pm - 8pm</span>
              <span className="day">Wednesday</span>
              <span className="hour">Wed: 12pm - 8pm</span>
            </div>
            <div className="hours-right">
              <span className="day">Thursday</span>
              <span className="hour">Thu: 12pm - 8pm</span>
              <span className="day">Friday</span>
              <span className="hour">Fri: 12pm - 8pm</span>
              <span className="day">Saturday</span>
              <span className="hour">Sat: 12pm - 8pm</span>
            </div>
          </div>
        </div>
        <div className="about-section">
          <h2 className="section-header">About the Business</h2>
          <div className="owner">
            <img
              className="owner-img"
              src={`${user.profileImg}`}
              alt={`${user.firstName}`}
            ></img>
            <div className="owner-details">
              <h3 className="owner-name">
                {user.firstName} {user.lastName}
              </h3>
              <h4 className="owner-title">Business Owner</h4>
            </div>
          </div>
          <p className="about-body">{business.description}</p>
        </div>
        <div className="questions-section">
          <div className="ask-question-div">
            <h2 className="section-header">Ask Bikini Bottom</h2>
            {!checkOwner() && (
              <>
                {sessionUser ? (
                  <AddQuestion />
                ) : (
                  <Link className="add-biz" to="/signup">
                    Sign up to ask a question
                  </Link>
                )}
              </>
            )}
          </div>
          <Questions />
        </div>
        <div className="review-section">
          <div className="review-header">
            {!checkOwner() && (
              <>
                {sessionUser ? (
                  <AddReview />
                ) : (
                  <Link className="add-biz" to="/signup">
                    Sign up to leave a review
                  </Link>
                )}
              </>
            )}
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Businesses;
