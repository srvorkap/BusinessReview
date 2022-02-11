import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { getBusinessesActionCreator } from "../../store/business";
import SingleBusiness from "./SingleBusiness";
import "./BusinessesPage.css";
import { NavLink, Redirect } from "react-router-dom";
import { mediumStars } from "../../helper";

const BusinessesPage = ({ sessionUser }) => {
    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    // const sessionUser = useSelector(state => state?.session?.user);
    const reviewsObject = useSelector(store => store?.review?.entries)
    const reviews = Object?.values(reviewsObject)
    // const filtered = reviews?.filter(review => review.businessId === businesses.id)

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getBusinesses());
    // }, [dispatch]);
    if (!sessionUser) return <Redirect to="/" />;
    return (
        <>
        <NavLink to='/businesses/new' className='no-underscore'>New business</NavLink>
        <ul>
            {businesses?.map(business => {
                return (
                    <div className="single-business" key={business?.id}>
                        <NavLink to={`/businesses/${business?.id}`}>
                            <div>
                                <img
                                    src={business?.imageURL}
                                    className="single-business-img"
                                />
                            </div>
                            <div>
                                <div>
                                    {business?.name}
                                </div>
                                <div className="stars-container">
                                    <img src={mediumStars(business.Reviews.length !== 0 ? (business.Reviews.map(review => review.rating).reduce((prev, current) => prev + current, 0)/business.Reviews.length) : 0)} />
                                    <p>{business.Reviews.length === 0 ? null : business.Reviews.length === 1 ? '1 review' : `${business.Reviews.length} reviews` }</p>
                                </div>
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
