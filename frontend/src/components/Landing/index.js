import React, {useState} from 'react';
import './Landing.css'

function Landing() {
    console.log("testing")
    return (
      <>
        <div className="landing-container">
             <div className="logo-search">
                 <img className="landing-logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img>
                 <input class="search"></input>
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
                 <div className="biz-listing">
                     <img className='listing-img' src='https://i.imgur.com/zUFJuDB.png' alt=''></img>
                     <p>Business snippet</p>
                 </div>
                 <div className="biz-listing">
                     <img className='listing-img' src='https://i.imgur.com/Qw9oOuL.png' alt=''></img>
                     <p>Business snippet</p>
                 </div>
                 <div className="biz-listing">
                     <img className='listing-img' src='https://i.imgur.com/XF6ZLjo.png' alt=''></img>
                     <p>Business snippet</p>
                 </div>
                 <div className="biz-listing">
                     <img className='listing-img' src='https://i.imgur.com/fcueLXl.jpg' alt=''></img>
                     <p>Business snippet</p>
                 </div>
             </div>
         </div>
      </>
    );
};

export default Landing;