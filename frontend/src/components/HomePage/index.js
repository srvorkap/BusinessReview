import { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import homePageImage from "../../images/homePage.jpeg";
import "./HomePage.css";

const HomePage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [ credential, setCredential ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errors, setErrors ] = useState([])

    if (sessionUser) return <Redirect to='/businesses' />

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
            <div>
                <img src={homePageImage} id="homepage-image" />
            </div>
            <div>
                <button onClick={demoLogin}>Demo</button>
            </div>
        </>
    );
};

export default HomePage;
