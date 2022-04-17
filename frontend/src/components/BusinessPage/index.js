import { useState, useEffect } from "react";
import { useParams, useHistory, Redirect, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBusiness } from "../../store/business";
import { getBusinesses } from "../../store/business";
import "./BusinessPage.css";

import { smallStars, largeStars } from "../../helper";
import { deleteReview, getReviews } from "../../store/review";

const BusinessPage = ({ sessionUser }) => {
    const { businessId } = useParams();
    const businessIdNumerical = +businessId;
    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );
    const reviewsObject = useSelector(store => store?.review?.entries);
    const reviews = Object?.values(reviewsObject);
    const currentBusinessReviews = reviews?.filter(
        review => review?.businessId === businessIdNumerical
    );

    const ratingArr = currentBusinessReviews.map(review => review.rating);

    let largeStarsImage;
    let reviewsCountRender;
    if (ratingArr.length !== 0) {
        const reviewsSum = ratingArr.reduce((prev, current) => prev + current);
        const reviewsCount = ratingArr.length;
        const rating = reviewsSum / reviewsCount;
        largeStarsImage = largeStars(rating);
        if (reviewsCount === 1) reviewsCountRender = `${reviewsCount} review`;
        else reviewsCountRender = `${reviewsCount} reviews`;
    } else {
        largeStarsImage = largeStars(0);
        reviewsCountRender = ``;
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const [isActive, setIsActive] = useState(false);

    // On edit go to edit business form page
    const onEdit = e => {
        e.preventDefault();
        history.push(`/businesses/${businessId}/edit`);
    };

    // On delete open conformation popup
    const onDelete = e => {
        e.preventDefault();
        setIsActive(true);
    };

    // On yes send delete request
    const onYes = async e => {
        e.preventDefault();
        dispatch(deleteBusiness(businessIdNumerical));
        history.push("/businesses");
    };

    // On no close conformation popup
    const onNo = e => {
        e.preventDefault();
        setIsActive(false);
    };

    const onReview = e => {
        e.preventDefault();
        history.push(`/businesses/${businessId}/reviews/new`);
    };

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    // first part of conditional rendering

    let isReviewed = false;
    for (const review of currentBusinessReviews) {
        if (review?.userId === sessionUser?.id) {
            isReviewed = true;
        }
    }

    // conditional rendering of write a review and edit/delete buttons
    let conditionalRendering;
    if (sessionUser?.id === currentBusiness?.userId)
        conditionalRendering = (
            <>
                <div>
                    <div className="note-buttons-container">
                        <button
                            type="button"
                            className="red buttons"
                            onClick={onEdit}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="red buttons"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className={isActive ? "popup" : "no-popup"}>
                    <div className="blocker-add"></div>
                    <div id="delete-business-popup">
                        <h1>Are you sure you want to delete</h1>
                        <h1>{currentBusiness?.name}?</h1>
                        <div>
                            <button
                                type="button"
                                className="red buttons"
                                onClick={onYes}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className=" red buttons"
                                onClick={onNo}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    else if (sessionUser?.id !== currentBusiness?.userId && !isReviewed)
        conditionalRendering = (
            <>
                <button
                    id="write-review-button"
                    type="button"
                    className="red buttons"
                    onClick={onReview}
                >
                    <i className="far fa-star" id="star"></i>
                    <p>Write a Review</p>
                </button>
            </>
        );
    if (!sessionUser) return <Redirect to="/login" />;
    return (
        <div id="business-page">
            <NavLink to='/businesses'>
                <i className="fas fa-arrow-alt-circle-left" id="go_back"></i>
            </NavLink>
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,1)), url(${currentBusiness?.imageURL})`,
                }}
                id="business-page-image"
            >
                <div id="boze">
                    <div>
                        <h1>{currentBusiness?.name}</h1>
                    </div>
                    <div
                        className="stars-container"
                        id="business-page-stars-container"
                    >
                        <img src={largeStarsImage} />
                        <p id="reviews-count-counter">{reviewsCountRender}</p>
                    </div>
                    <div>
                        <div>{currentBusiness?.description}</div>
                        <div>{currentBusiness?.hours}</div>
                        <div>
                            {currentBusiness?.city}, {currentBusiness?.state}
                        </div>
                        <div>{currentBusiness?.address}</div>
                        <div>{currentBusiness?.phone}</div>
                    </div>
                </div>
            </div>

            <div>{conditionalRendering}</div>

            <div id="reviews-container">
                <div>
                    <h4 id="reviews-header">
                        Reviews for {currentBusiness?.name}
                    </h4>
                    {currentBusinessReviews?.map(review => (
                        <div key={review.id} id="single-review">
                            <h4 id="review-user">{review?.User?.username}</h4>
                            <img src={smallStars(review.rating)} />
                            <p id="text">{review.content}</p>
                            {sessionUser.id === review.userId ? (
                                <div id="gospode">
                                    <button
                                        className="red"
                                        id="edit-review"
                                        onClick={e => {
                                            e.preventDefault();
                                            history.push(
                                                `/businesses/${businessId}/reviews/${review.id}/edit`
                                            );
                                        }}
                                    >
                                        Edit review
                                    </button>
                                    <button
                                        className="red"
                                        id="remove-review"
                                        onClick={e => {
                                            e.preventDefault();
                                            dispatch(deleteReview(review.id));
                                        }}
                                    >
                                        Remove review
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;
