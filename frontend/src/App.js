import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import BusinessesPage from "./components/BusinessesPage";
import BusinessPage from "./components/BusinessPage";
import CreateBusinessForm from "./components/CreateBusinessForm";
import EditBusinessForm from "./components/EditBusinessForm";
import CreateReviewForm from "./components/CreateReviewForm";
import EditReviewForm from "./components/EditReviewForm";
import ErrorPage from "./components/ErrorPage";
import { useSelector } from 'react-redux'
import { getBusinesses } from "./store/business";
import { getReviews } from "./store/review";

function App() {
    const sessionUser = useSelector(state => state?.session?.user);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        // dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
        const getReady = async() => {
            await dispatch(sessionActions.restoreUser())
            // await dispatch(getBusinesses())
            await dispatch(getReviews())
            setIsLoaded(true)
        }
        getReady()
    }, [dispatch]);

    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/">
                    <Navigation isLoaded={isLoaded} />
                    {isLoaded && (
                        <Switch>
                            <Route path="/login">
                                <LoginFormPage />
                            </Route>
                            <Route path="/signup">
                                <SignupFormPage />
                            </Route>
                            <Route path="/businesses/new">
                                <CreateBusinessForm sessionUser={sessionUser}/>
                            </Route>
                            <Route path="/businesses/:businessId/edit" exact>
                                <EditBusinessForm sessionUser={sessionUser} />
                            </Route>
                            <Route path="/businesses/:businessId" exact>
                                <BusinessPage sessionUser={sessionUser}/>
                            </Route>
                            <Route path="/businesses" exact>
                                <BusinessesPage sessionUser={sessionUser} />
                            </Route>
                            <Route path="/businesses/:businessId/reviews/new">
                                <CreateReviewForm sessionUser={sessionUser} />
                            </Route>
                            <Route path='/businesses/:businessId/reviews/:reviewId/edit'>
                                <EditReviewForm sessionUser={sessionUser} />
                            </Route>
                            <Route>
                                <ErrorPage sessionUser={sessionUser} />
                            </Route>
                        </Switch>
                    )}
                </Route>
            </Switch>
        </>
    );
}

export default App;
