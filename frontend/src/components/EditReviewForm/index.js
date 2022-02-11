import { useState } from "react";
import { useHistory, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { patchReview } from "../../store/review";
import { smallStars, mediumStars } from "../../helper";
import "./EditReviewForm.css";

const EditReviewForm = ({ sessionUser }) => {
    const { businessId } = useParams()
    const businessIdNumerical = +businessId

    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );

    const { reviewId } = useParams();
    const reviewIdNumerical = +reviewId

    const reviewsObject = useSelector(store => store?.review?.entries);
    const reviews = Object?.values(reviewsObject);
    const currentReview = reviews?.find(
        review => review?.id === reviewIdNumerical
    );
    const {
        rating,
        content,
        // userId,
        // businessId
    } = currentReview;

    const [editedRating, setEditedRating] = useState(rating);
    const [editedContent, setEditedContent] = useState(content);

    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async e => {
        e.preventDefault();
        const editedReview = {
            id: reviewIdNumerical,
            rating: editedRating,
            content: editedContent,
        };
        const data = await dispatch(patchReview(editedReview));
        if (data && data.errors) setErrors(data.errors);
        console.log(data);
        if (!data.errors) {
            history.push(`/businesses/${businessId}`);
        }
    };

    const onCancel = e => {
        e.preventDefault()
        history.goBack()
    };
    if (!sessionUser) return <Redirect to="/" />;
    return (
        <div className="input-box">
            <h1 className="business-title">{currentBusiness.name}</h1>
            <form onSubmit={onSubmit}>
                <div className="content">
                    <ul className="errors">
                        {errors?.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <label htmlFor="rating">Select your rating</label>
                    <select name="rating" value={editedRating} onChange={e => setEditedRating(e.target.value)}>
                        <option value={1}>Not good</option>
                        <option value={2}>Could've been better</option>
                        <option value={3}>OK</option>
                        <option value={4}>Good</option>
                        <option value={5}>Great</option>
                    </select>
                    <div>
                        <textarea
                            id="content"
                            type="text"
                            name="content"
                            value={editedContent}
                            onChange={e => setEditedContent(e.target.value)}
                            placeholder="Write a Review"
                            rows="20"
                            cols="80"
                        />
                    </div>
                </div>
                <div className="business-buttons-container">
                    <button type="submit" className="red buttons">
                        Post Review
                    </button>
                    <button
                        type="button"
                        className="red buttons"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditReviewForm;
