import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { getBusinessesActionCreator } from "../../store/business";
import SingleBusiness from "./SingleBusiness";
import "./BusinessesPage.css";
import { NavLink, Redirect } from "react-router-dom";

const BusinessesPage = () => {
    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    const sessionUser = useSelector(state => state?.session?.user);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);
    if (!sessionUser) return <Redirect to="/" />;
    return (
        <>
        <NavLink to='/businesses/new' className='no-underscore'>New business</NavLink>
        <ul>
            {businesses?.map(business => {
                // return <li key={business.id}>{business.name}</li>
                return (
                    <div className="single-business">
                        <NavLink to={`/businesses/${business?.id}`}>
                            <div>
                                <img
                                    src={business?.imageURL}
                                    className="single-business-img"
                                />
                            </div>
                            <div>
                                <div>
                                    {business?.id}. {business?.name}
                                </div>
                                <div>RATING</div>
                                <div>{business?.hours}</div>
                                <div>{business?.phone}</div>
                            </div>
                        </NavLink>
                    </div>
                );
            })}
        </ul>
        </>
    );
};

export default BusinessesPage;
