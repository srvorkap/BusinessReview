import { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import backgroundImage from "../../images/homePageTwo.jpeg";
import Navigation from "../NavBar";
import yelpBurst from "../../images/yelp_burst.png";
import "./LandingPage.css";

const HomePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);
    if (sessionUser) return <Redirect to="/businesses" />;

    const demoLogin = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(
            sessionActions.login({
                credential: "demo@user.io",
                password: "password",
            })
        ).catch(async res => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
    };
    return (
        <>
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                id="homepage-image"
            >
                <Navigation isLoaded={isLoaded} />
                {isLoaded && (
                    <div id="title-and-logo">
                        <div>
                            <h1>Business Review</h1>
                        </div>
                        <div>
                            <img src={yelpBurst} id='logo' />
                        </div>
                    </div>
                )}
                <div id="login-signup-demo">
                    <div>
                        <p>
                            Review your favorite businesses and share your
                            experiences with our community
                        </p>
                    </div>
                    <div id="login-signup">
                        <div>
                            <NavLink to="/login" className="links margin-right">
                                Log In
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/signup"
                                className="links margin-right"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <button
                            className="red buttons"
                            id="demo-button"
                            onClick={demoLogin}
                        >
                            Demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
