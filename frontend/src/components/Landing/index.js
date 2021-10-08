import React, {useEffect, useState} from 'react';
import Businesses from '../Businesses';
import { useDispatch, useSelector } from 'react-redux';
import './Landing.css'
import { getBusinesses, getPhotos } from '../../store/businesses';
import {Link} from 'react-router-dom'



function Landing() {
    const dispatch = useDispatch();
    const businesses = useSelector((state) => state.business)
    const photos = useSelector((state) => state.photo) 
    const eachBusiness = []
    const eachPhoto = []
    Object.values(businesses).map((business) => (eachBusiness.push(business)))
    Object.values(photos).map((photo) => eachPhoto.push(photo))
    // console.log("Each photo", eachPhoto)

    // const [photo, setPhoto] = useState('')



    useEffect(() => {
        dispatch(getBusinesses())
        dispatch(getPhotos())
    }, [dispatch])

    return (
      <>
        <div className="landing-container">
             <div className="logo-search">
                 <img className="landing-logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img>
                 <input className="search"></input>
                 {/* <i className="fa-solid fa-magnifying-glass"></i> */}
             </div>
             <div className="biz-categories">
                 <i className="fa-solid fa-utensils icon"/>
                 <p>Category Name</p>
                 <i className="fa-solid fa-ship icon" />
                 <p>Category Name</p>
                 <i className="fa-solid fa-martini-glass-empty icon"/>
                 <p>Category Name</p>
                 <i className="fa-solid fa-shop icon"/>
                 <p>Category Name</p>
             </div>
         </div>
         <div className="listings">
             <h1 className="title">Kelp: Bikini Bottom</h1>
             <h2 className="categories">Categories</h2>
             <div className="businesses">
                 {/* Need to make this not print a photo for the length of the 
                 photoos array */}
                 {eachBusiness.map((business) => {
                        const photo = eachPhoto.find(photo => photo.businessId === business.id)
                     return (
                    <div className="biz-listing">
                        <Link to={`${business.id}`} > <img className='listing-img' src={photo ? photo.url: 'https://i.imgur.com/DbdVpyZ.png'} alt={photo ? photo.alt: 'placeholder'}></img>
                        </Link>
                        {/* Names disappeared when pictures from database
                        were added. Needs fixed */}
                        <p>{business.name}</p>
                    </div>
                     )     
                 })}
             </div>
         </div>
      </>
    );
};

export default Landing;