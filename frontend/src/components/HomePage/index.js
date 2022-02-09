import { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import homePageImage from "../../images/homePage.jpeg";
import backgroundImage from "../../images/homePageTwo.jpeg";
import Navigation from "../Navigation";
import yelpBurst from '../../images/yelp_burst.png';
import "./HomePage.css";

const HomePage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
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
                id="homepage-nav"
            >
                <Navigation isLoaded={isLoaded} />
                {isLoaded && (
                    <>
                        <h1>something else in the header</h1>
                        <img src={yelpBurst} />
                    </>
                )}
            </div>
            <div>
                <div>
                    <h1>some restaurants</h1>
                </div>
                <div>
                    <button onClick={demoLogin}>Demo</button>
                </div>
            </div>
        </>
    );
};

export default HomePage;
