import { useState } from "react";
import {
    largeZero,
    largeOne,
    largeTwo,
    largeThree,
    largeFour,
    largeFive,
} from "../../helper";
import "./Rating.css";

const Rating = (props) => {
    const [rating, setRating] = useState(props.srkica);
    const [hover, setHover] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const ratingImageFunc = rating => {
        if (rating === 0) return largeZero;
        else if (rating === 1) return largeOne;
        else if (rating === 2) return largeTwo;
        else if (rating === 3) return largeThree;
        else if (rating === 4) return largeFour;
        else return largeFive;
    };

    const ratingTextFunc = rating => {
        if (rating === 0) return null
        else if (rating === 1) return 'Not good';
        else if (rating === 2) return `Could've been better`;
        else if (rating === 3) return 'OK';
        else if (rating === 4) return 'Good';
        else return 'Great';
    }

    return (
        <div id="rating-container" onMouseLeave={() => setIsActive(false)}>
            {isActive ? <img src={ratingImageFunc(hover)}/> : <img src={ratingImageFunc(rating)} />}


            <div id="div-radio-container">
                {[...Array(5)].map((start, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label key={index}>
                            <div className="div-around-radio-button"
                            onMouseEnter={() => {
                                setIsActive(true)
                                setHover(ratingValue)
                            }
                            }
                            onClick={() => setRating(ratingValue)}
                            >

                            </div>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => props.changeRating(ratingValue)}
                                className="rating-radio-buttons"
                            />
                        </label>
                    );
                })}
            </div>
            <div id="rating-text">{isActive ? ratingTextFunc(hover) : ratingTextFunc(rating)}</div>
        </div>
    );
};

export default Rating;
