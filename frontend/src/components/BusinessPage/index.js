import { useState, useEffect } from "react";
import { NavLink, useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { deleteBusiness } from "../../store/business";
import "./BusinessPage.css";

import { smallStars, largeStars } from '../../helper'

const BusinessPage = () => {
    // rating
    let rating = 1.6
    const x = smallStars(rating)
    const y = largeStars(rating)

    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const businessIdNumerical = +businessId;
    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );
    const dispatch = useDispatch();
    const history = useHistory();

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);

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
        history.push("/reviews/new");
    };

    // conditional rendering of write a review and edit/delete buttons
    let conditionalRendering;
    if (sessionUser?.id === currentBusiness?.userId)
        conditionalRendering = (
            <>
                <div>
                    <div className="note-buttons-container">
                        <button
                            type="button"
                            className="buttons"
                            onClick={onEdit}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="buttons"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className={isActive ? "popup" : "no-popup"}>
                    <div className="blocker-add"></div>
                    <div id="delete-business-popup">
                        <h1>
                            Are you sure you want to delete{" "}
                            {currentBusiness?.name}
                        </h1>
                        <div>
                            <button
                                type="button"
                                className="buttons"
                                onClick={onYes}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className="buttons"
                                onClick={onNo}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    else
        conditionalRendering = (
            <button type="button" className="buttons" onClick={onReview}>
                Write a Review
            </button>
        );
    return (
        <>
            <div>
                <img
                    src={currentBusiness?.imageURL}
                    className="single-business-img"
                />
            </div>
            <div id='stars-container'>
                <img src={y}/>
            </div>
            <div>
                <div>{currentBusiness?.name}</div>
                <div>RATING</div>
                <div>{currentBusiness?.hours}</div>
                <div>{currentBusiness?.phone}</div>
            </div>
            {conditionalRendering}
        </>
    );
};

export default BusinessPage;
