import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Landing.css'
import { getBusinesses } from '../../store/businesses';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faGlassMartiniAlt, faGraduationCap, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchBar/SearchResults';
import { getReviews } from '../../store/reviews';
import GetCategory from '../Businesses/SortBusinesses';





function Landing() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const businesses = useSelector((state) => state.business);
    const categories = useSelector((state) => state.categories);
    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
    const reviews = useSelector((state) => state.reviews)
    const [sort, setSort] = useState(0);
    
    
    const eachBusiness = [];
    const eachReview = [];
    const eachCategory = [];
    Object.values(businesses).map((business) => (eachBusiness.push(business)))
    Object.values(reviews).map((review) => (eachReview.push(review)))
    Object.values(categories).map((category) => (eachCategory.push(category)))
    

    useEffect(() => {
        dispatch(getBusinesses())
        dispatch(getReviews())
        setSort(sort)
    }, [dispatch, sort])



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
            <div className="results-div">
              {eachBusiness.map((business) => <SearchResults key={business.id} business={business} getStars={getStars}/>)}
            </div>
         </div>

         <div className="listings">
             <h1 className="title">Kelp: Bikini Bottom</h1>
             <div className="categories">
                <h2 >Categories</h2>
                {
                    sessionUser ? <Link className="add-biz edit-business" to='/businesses/add'>Add a Business</Link> :
                    <Link className="add-biz" to='/signup'>Sign up to add a business</Link>
                    
                
                }
             </div>
             {/* <div className="businesses"> */}
               <div className="sort-buttons">
                 <button className="sort" value={0} onClick={(e) => {
                  setSort(e.target.value);
                  }}>All</button>
                  <span className="border"></span>
                  <button className="sort" value={1} onClick={(e) => {
                  setSort(e.target.value);
                  }}>Fast Food</button>
                  <span className="border"></span>

                  <button className="sort" value={2} onClick={(e) => {
                  setSort(e.target.value);
                  }}>Bar</button>
                  <span className="border"></span>

                  <button className="sort" value={3} onClick={(e) => {
                  setSort(e.target.value);
                  }}>Education</button>
                  <span className="border"></span>

                  <button className="sort" value={4} onClick={(e) => {
                  setSort(e.target.value);
                  }}>Gift Shop</button>
               </div>
               
                {sort === 0 ? 
                <div className="businesses">
                  {eachBusiness.map((business) => {
                    !business.image.includes('https') ? business.image ="https://mystickermania.com/cdn/stickers/memes/this-is-a-load-of-barnacles-meme-512x512.png" :
                    business.image = business.image

                     return (
                    <div key={business.id} className="biz-listing">
                        
                          <Link  to={`/${business.id}`} > <img className='listing-img' src={business.image} alt={business.name}></img></Link>
                          <Link  to={`/${business.id}`} > <p className="biz-link">{business.name}</p></Link>
                          <Link  to={`/${business.id}`} > <span className="stars">{getStars(business.id)}</span></Link>
                        
                    </div>
                     )     
                 })}
                </div> :
                <GetCategory 
                sort={sort} 
                getStars={getStars()}
                />
                
              }
                 
             {/* </div> */}
         </div>
      </>
    );
};

export default Landing;