import { useState } from "react";
import { useHistory, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../store/review";
import { smallStars, mediumStars } from "../../helper";
import "./CreateReviewForm.css";

const CreateReviewForm = ({ sessionUser }) => {
    const { businessId } = useParams();
    const businessIdNumerical = +businessId

    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );

    const [rating, setRating] = useState("");
    const [content, setContent] = useState("");

    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async e => {
        e.preventDefault();
        const review = {
            rating,
            content,
            userId: sessionUser.id,
            businessId: businessIdNumerical
        };
        const data = await dispatch(postReview(review));
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
                    <select name="rating" onChange={e => setRating(e.target.value)}>
                        <option selected disabled>Select your rating</option>
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
                            value={content}
                            onChange={e => setContent(e.target.value)}
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

export default CreateReviewForm;
