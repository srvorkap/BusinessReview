import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { patchBusiness } from "../../store/business";
import createBusinessFormImage from "../../images/homePageThree.jpeg";
import "./EditBusinessForm.css";

const EditBusinessForm = ({ sessionUser }) => {
    const { businessId } = useParams();
    const businessIdNumerical = +businessId;
    const businessesObject = useSelector(store => store?.business?.entries);
    const businesses = Object?.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );

    const dispatch = useDispatch();
    const history = useHistory();

    const {
        imageURL,
        name,
        description,
        address,
        city,
        state,
        zipCode,
        phone,
        hours,
        userId,
    } = currentBusiness;

    const [editedImageURL, setEditedImageURL] = useState(imageURL);
    const [editedName, setEditedName] = useState(name);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedAddress, setEditedAddress] = useState(address);
    const [editedCity, setEditedCity] = useState(city);
    const [editedState, setEditedState] = useState(state);
    const [editedZipCode, setEditedZipCode] = useState(zipCode);
    const [editedPhone, setEditedPhone] = useState(phone);
    const [editedHours, setEditedHours] = useState(hours);

    const [errors, setErrors] = useState([]);

    const onSubmit = async e => {
        e.preventDefault();
        const editedBusiness = {
            id: businessIdNumerical,
            imageURL: editedImageURL,
            name: editedName,
            description: editedDescription,
            address: editedAddress,
            city: editedCity,
            state: editedState,
            zipCode: editedZipCode,
            phone: editedPhone,
            hours: editedHours,
            userId,
        };
        const data = await dispatch(patchBusiness(editedBusiness));
        if (data && data.errors) {
            setErrors(data.errors);

            setEditedImageURL(imageURL);
            setEditedName(name);
            setEditedDescription(description);
            setEditedAddress(address);
            setEditedCity(city);
            setEditedState(state);
            setEditedZipCode(zipCode);
            setEditedPhone(phone);
            setEditedHours(hours);
        }
        if (!data.errors) history.push(`/businesses/${businessId}`);
    };
    const onClick = e => {
        e.preventDefault();
        history.push(`/businesses/${businessId}`);
    };
    if (!sessionUser) return <Redirect to="/login" />;
    return (
        <div className="signup-login-page">
            <div className="signup-login-form" id="edit-business-form">
                <h1 id="create-business-heading">Edit Business</h1>
                <form onSubmit={onSubmit}>
                        <ul className="errors">
                            {errors?.map(error => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="imageURL"
                                value={editedImageURL}
                                onChange={e =>
                                    setEditedImageURL(e.target.value)
                                }
                                placeholder="Image"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="name"
                                value={editedName}
                                onChange={e => setEditedName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="description"
                                value={editedDescription}
                                onChange={e =>
                                    setEditedDescription(e.target.value)
                                }
                                placeholder="Business Details"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="address"
                                value={editedAddress}
                                onChange={e => setEditedAddress(e.target.value)}
                                placeholder="Address"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="city"
                                value={editedCity}
                                onChange={e => setEditedCity(e.target.value)}
                                placeholder="City"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="state"
                                value={editedState}
                                onChange={e => setEditedState(e.target.value)}
                                placeholder="State"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="zipCode"
                                value={editedZipCode}
                                onChange={e => setEditedZipCode(e.target.value)}
                                placeholder="Zip Code"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="phone"
                                value={editedPhone}
                                onChange={e => setEditedPhone(e.target.value)}
                                placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-login-inputs"
                                type="text"
                                name="hours"
                                value={editedHours}
                                onChange={e => setEditedHours(e.target.value)}
                                placeholder="Hours"
                            />
                        </div>
                    <div className="business-buttons-container">
                        <button
                            type="submit"
                            className="red buttons"
                            id="edit-business-button"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="red buttons"
                            id="edit-business-button"
                            onClick={onClick}
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

export default EditBusinessForm;
