import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Businesses from "./components/Businesses";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route path="/:id">
            <Businesses />
        </Route>
            
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
