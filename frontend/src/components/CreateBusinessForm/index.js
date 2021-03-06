import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postBusiness } from "../../store/business";
import createBusinessFormImage from "../../images/homePageThree.jpeg";
import "./CreateBusinessForm.css";

const CreateBusinessForm = ({ sessionUser }) => {
    const [imageURL, setImageURL] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [hours, setHours] = useState("");

    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async e => {
        e.preventDefault();
        const business = {
            imageURL,
            name,
            description,
            address,
            city,
            state,
            zipCode,
            phone,
            hours,
            userId: sessionUser.id,
        };
        const data = await dispatch(postBusiness(business));
        if (data && data.errors) setErrors(data.errors);
        if (!data.errors) {
            const businessId = data.id.toString();
            history.push(`/businesses/${businessId}`);
        }
    };

    const onCancel = e => {
        e.preventDefault();
        history.goBack();
    };
    if (!sessionUser) return <Redirect to="/login" />;
    return (
        <div className="signup-login-page">
            <div className="signup-login-form" id="create-business-form">
                <h1 id="create-business-heading">Add New Business</h1>
                <form onSubmit={onSubmit} id="business-gospode-dva">
                    <ul className="errors">
                        {errors?.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="imageURL"
                                value={imageURL}
                                onChange={e => setImageURL(e.target.value)}
                                placeholder="Image"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Categories"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="address"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                placeholder="Address"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="city"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                placeholder="City"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="state"
                                value={state}
                                onChange={e => setState(e.target.value)}
                                placeholder="State"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="zipCode"
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                                placeholder="Zip Code"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="hours"
                                value={hours}
                                onChange={e => setHours(e.target.value)}
                                placeholder="Hours"
                            />
                        </div>
                    </div>

                    <div className="business-buttons-container">
                        <button
                            type="submit"
                            className="red buttons"
                            id="create-business-button"
                        >
                            Create
                        </button>
                        <button
                            type="button"
                            className="red buttons"
                            id="create-business-button"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <img src={createBusinessFormImage} />
            </div>
        </div>
    );
};

export default CreateBusinessForm;
