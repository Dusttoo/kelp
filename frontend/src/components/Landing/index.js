import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Landing.css'
import { getBusinesses } from '../../store/businesses';
import {Link} from 'react-router-dom'




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
             <div className="logo-search">
                 <img className="landing-logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img>
                 <input className="search"></input>
                 {/* <i className="fa-solid fa-magnifying-glass"></i> */}
             </div>
             <div className="biz-categories">
                 <i className="fa-solid fa-utensils"></i>
                 <p>Category Name</p>
                 <i className="fa-solid fa-ship"></i>
                 <p>Category Name</p>
                 <i className="fa-solid fa-martini-glass-empty"></i>
                 <p>Category Name</p>
                 <i className="fa-solid fa-shop"></i>
                 <p>Category Name</p>
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
                    <div className="biz-listing">
                        <Link  to={`/${business.id}`} > <img className='listing-img' src={business.image} alt={business.name}></img>
                        </Link>
                       
                        <p>{business.name}</p>
                        <span className="stars">{getStars(business.id)}</span>

                    </div>
                     )     
                 })}
             </div>
         </div>
      </>
    );
};

export default Landing;