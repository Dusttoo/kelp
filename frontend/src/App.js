import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Businesses from "./components/Businesses/Businesses";
import AddBusiness from './components/Businesses/AddBusiness';
import EditBusiness from "./components/Businesses/EditBusiness";
import { getUsers } from "./store/users";
import { getBusinesses } from "./store/businesses";
import { getReviews } from "./store/reviews";
import { getCategories } from "./store/categories";
import EditReview from "./components/Reviews/EditReview";
import DeleteReview from "./components/Reviews/DeleteReview";
import { getQuestions } from "./store/questions";
import EditQuestion from "./components/Questions/EditQuestion";
import DeleteQuestion from "./components/Questions/DeleteQuestion";
import ErrorPage from './components/ErrorPage/ErrorPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getUsers());
    dispatch(getBusinesses());
    dispatch(getReviews());
    dispatch(getCategories());
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <>
    
      <Navigation isLoaded={isLoaded} />

      
      
      {isLoaded && (
        <Switch>
          
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/:id">
            <Businesses isLoaded={isLoaded}/>
          </Route>
          <Route exact path="/businesses/add">
            <AddBusiness />
          </Route>
          <Route exact path="/businesses/:id">
            <EditBusiness />
          </Route>
          <Route exact path="/reviews/:id">
            <EditReview />
          </Route>
          <Route exact path="/reviews/:id/delete">
            <DeleteReview />
          </Route>
          <Route exact path="/questions/:id">
            <EditQuestion />
          </Route>
          <Route exact path="/questions/:id/delete">
            <DeleteQuestion />
          </Route>

        </Switch>
        
        
      )}

      <Footer />
      
        
      
    </>
  );
}

export default App;
