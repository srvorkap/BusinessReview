import { useState, useEffect } from "react";
import { NavLink, useParams, useHistory, Redirect } from "react-router-dom";
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

    // const onEditReview = e => {
    //     e.preventDefault()
    //     history.push(`/businesses/${businessId}/reviews/${review.id}/edit`)
    // }

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    // first part of conditional rendering

    let isReviewed = false;
    for (const review of currentBusinessReviews) {
        if (review?.userId === sessionUser?.id) {
            isReviewed = true;
            console.log(review?.userId);
            console.log(sessionUser?.id);
            console.log(isReviewed);
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
                    type="button"
                    className="red buttons"
                    onClick={onReview}
                >
                    Write a Review
                </button>

            </>
        );
    if (!sessionUser) return <Redirect to="/" />;
    return (
        <>
            <div>
                <img
                    src={currentBusiness?.imageURL}
                    className="single-business-img"
                />
            </div>
            <div>{currentBusiness?.name}</div>
            <div className="stars-container">
                <img src={largeStarsImage} />
                <p>{reviewsCountRender}</p>
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
            {conditionalRendering}
            <div id="reviews-container">
                <ul>
                    {currentBusinessReviews?.map(review => (
                        <li key={review.id}>
                            <h1>{review?.User?.username}</h1>
                            <img src={smallStars(review.rating)} />
                            <p>{review.content}</p>
                            {sessionUser.id === review.userId ? (
                                <div>
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            history.push(
                                                `/businesses/${businessId}/reviews/${review.id}/edit`
                                            );
                                        }}
                                    >
                                        Edit
                                    </button>
                                    {/* <button onClick={e => {
                                        e.preventDefault()
                                        dispatch(deleteReview(review.id));
                                    }}>Delete</button> */}
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BusinessPage;
