import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Landing.css'
import { getBusinesses } from '../../store/businesses';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faGlassMartiniAlt, faGraduationCap, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchBar/SearchResults';
import { getReviews } from '../../store/reviews';





function Landing() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector((state) => state.business)
    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
    const reviews = useSelector((state) => state.reviews)
    
    
    const eachBusiness = []
    const eachReview = [];
    Object.values(businesses).map((business) => (eachBusiness.push(business)))
    Object.values(reviews).map((review) => (eachReview.push(review)))
    
    

    useEffect(() => {
        dispatch(getBusinesses())
        dispatch(getReviews())
    }, [dispatch])

    const getStars = (id) => {
    const starTotal = []
    eachReview.forEach((review) => {
        if (review.businessId === id) {
            starTotal.push(review.stars)
        }
    })
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
      )
    }

    return (
      <>
        <div className="landing-container">
        {/* <div className="overlay"></div> */}
             <div className="logo-search">
                 <img className="landing-logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img>
                 <SearchBar />
                 {/* <input className="search" placeholder="Search for a business"></input> */}
                 {/* <i className="fa-solid fa-magnifying-glass"></i> */}
             </div>
             <div className="biz-categories">
               <div className="icon-text">
                 <FontAwesomeIcon icon={faUtensils} className="icon" />
                 <p className="category-snip">Restuarants</p>
               </div>
               <div className="icon-text">
                 <FontAwesomeIcon icon={faGlassMartiniAlt} className="icon" />
                 <p className="category-snip">Bars</p>
               </div>
               <div className="icon-text">
                  <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                  <p className="category-snip">Schools</p>
               </div>
               <div className="icon-text">
                  <FontAwesomeIcon icon={faShoppingBasket} className="icon" />
                  <p className="category-snip">Shops</p>
               </div>
             </div>
            <div className="result-container">
              {eachBusiness.map((business) => <SearchResults key={business.id} business={business} getStars={getStars}/>)}
            </div>
         </div>

         <div className="listings">
             <h1 className="title">Kelp: Bikini Bottom</h1>
             <div className="categories">
                <h2 >Categories</h2>
                {
                    sessionUser ? <Link className="add-biz edit-business" to='/businesses/add'>Add a Business</Link> :
                    <Link className="add-biz edit-business" to='/signup'>Sign up to add a business</Link>
                    
                
                }
             </div>
             <div className="businesses">
                 
                 {eachBusiness.map((business) => {
                     return (
                    <div key={business.id} className="biz-listing">
                        <Link  to={`/${business.id}`} > 
                          <img className='listing-img' src={business.image} alt={business.name}></img>
                          <p className="biz-link">{business.name}</p>
                          <span className="stars">{getStars(business.id)}</span>
                        </Link>
                    </div>
                     )     
                 })}
             </div>
         </div>
      </>
    );
};

export default Landing;