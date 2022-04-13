import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./BusinessesPage.css";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { getBusinesses } from "../../store/business";
import { mediumStars } from "../../helper";

const BusinessesPage = ({ sessionUser }) => {
    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    // const sessionUser = useSelector(state => state?.session?.user);
    const reviewsObject = useSelector(store => store?.review?.entries);
    const reviews = Object?.values(reviewsObject);
    // const filtered = reviews?.filter(review => review.businessId === businesses.id)

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);

    const onClick = e => {
        e.preventDefault();
        history.push("/businesses/new");
    };
    if (!sessionUser) return <Redirect to="/login" />;
    return (
        <>
            <button className="red buttons" id="new-business" onClick={onClick}>
                Add New Business
            </button>
            <div id="big-business">
                {businesses?.map(business => {
                    return (
                        <NavLink
                            to={`/businesses/${business?.id}`}
                            key={business?.id}
                            className="single-business"
                        >
                            <div className="inner-single-business">
                                <div id="image-container">
                                    <img
                                        src={business?.imageURL}
                                        className="single-business-image"
                                    />
                                </div>
                                <div id="details-container">
                                    <div>{business?.name}</div>
                                    <div className="stars-container">
                                        <img
                                            src={mediumStars(
                                                business?.Reviews?.length !== 0
                                                    ? business?.Reviews?.map(
                                                          review =>
                                                              review?.rating
                                                      )?.reduce(
                                                          (prev, current) =>
                                                              prev + current,
                                                          0
                                                      ) /
                                                          business?.Reviews
                                                              ?.length
                                                    : 0
                                            )}
                                        />
                                        <p id="review">
                                            {business?.Reviews?.length === 0
                                                ? null
                                                : business?.Reviews?.length ===
                                                  1
                                                ? "1 review"
                                                : `${business?.Reviews?.length} reviews`}
                                        </p>
                                    </div>
                                    <div>{business?.description}</div>
                                    <div>
                                        {business?.city}, {business?.state}
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </>
    );
};

export default BusinessesPage;
