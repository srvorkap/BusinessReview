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
import ErrorPage from "./components/ErrorPage";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
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
                                <CreateBusinessForm />
                            </Route>
                            <Route path="/businesses/:businessId/edit" exact>
                                <EditBusinessForm />
                            </Route>
                            <Route path="/businesses/:businessId" exact>
                                <BusinessPage />
                            </Route>
                            <Route path="/businesses" exact>
                                <BusinessesPage />
                            </Route>
                            <Route path="/reviews/new">
                                <CreateReviewForm />
                            </Route>
                            <Route>
                                <ErrorPage />
                            </Route>
                        </Switch>
                    )}
                </Route>
            </Switch>
        </>
    );
}

export default App;
