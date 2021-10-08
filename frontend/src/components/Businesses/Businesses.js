import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneBusiness } from '../../store/businesses';
import { useParams } from 'react-router';
import './Businesses.css'


const Businesses = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const businesses = getOneBusiness(id);
  console.log(businesses)

  useEffect(() => {
    dispatch(getOneBusiness(id));
  }, [dispatch]);

    //trying to get data from getOneBusiness to
  //display on business page

  return (
    <div>
        <div className="biz-info">
          <div className="header-left">
              <h1 className="biz-title">Business Name</h1>
              <div className="header-subinfo">
                <p className="stars">Reviews info</p>
                <p className="category-header">Category</p>
                <p className="hours-header">Hours</p>
              </div>
          </div>
          <div className="header-right">
            <p className="view-photo">See Photos</p>
          </div>
        </div>
        <div className="main">
          <div className="add-buttons">
            <button className="write-review">Write Review</button>
          </div>
          <div className="menu-section">
            <h2 className="section-header">Menu</h2>
            <span>Menu stuff</span>
          </div>
          <div className="location-section">
            <div className="location-left-side">
              <h2 className="section-header">Location</h2>
              <div>Map</div>
              <p>Address</p>
            </div>
            <div className="location-right-side">
              <ul>
                <li>Mon:</li>
                <li>Tue:</li>
                <li>Wed:</li>
                <li>Thu:</li>
                <li>Fri:</li>
                <li>Sat:</li>
                <li>Sun</li>
              </ul>
              <p>edit hours</p>
            </div>
          </div>
          <div className="about-section">
              <h2 className="section-header">About the Business</h2>
              <div className="owner">
                <img className="owner-img" src='' alt=''></img>
                <p className="owner-name">Name</p>
                <p className="owner-title">Business Owner</p>
              </div>
              <p className="about-body">Info about business here</p>
          </div>
          <div className="questions-section">
            <div className="ask-question-div">
              <h2 className="section-header">Ask Bikini Bottom</h2>
              <h3>Ask a question +</h3>
            </div>
            <p className="quesion-asked">This is my question</p>
            <p className="answer">This is my answer</p>

          </div>
          <div className="review-section">
            <div className="sort-review">
              <input></input>
              <button className="sort">Kelp Sort</button>
            </div>
            <div className="review">
              <div className="reviewer">
                <img className="reviewer-img" src='' alt=''></img>
                <p className="reviewer-name">Name</p>
                <p className="reviewer-title">Location</p>
              </div>
              <span className="stars">Stars</span>
              <p className="review-content">Review goes here</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Businesses;