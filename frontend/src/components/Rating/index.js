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
    // console.log(props)
    // console.log(props.srkica)
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

    return (
        <div id="rating-container" onMouseLeave={() => setIsActive(false)}>
            {isActive ? <img src={ratingImageFunc(hover)} id='miki'/> : <img src={ratingImageFunc(rating)} />}


            <div id="div-radio-container">
                {[...Array(5)].map((start, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label>
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
        </div>
    );
};

export default Rating;
