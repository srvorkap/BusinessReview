import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const EditBusinessForm = () => {
    const { businessId } = useParams();
    const businessIdNumerical = +businessId;
    const businessesObject = useSelector(store => store.business.entries);
    const businesses = Object.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );
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
    } = currentBusiness;

    const [editedImageURL, setEditedImageURL] = useState('');
    const [editedName, setEditedName] = useState(name);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedAddress, setEditedAddress] = useState(address);
    const [editedCity, setEditedCity] = useState(city);
    const [editedState, setEditedState] = useState(state);
    const [editedZipCode, setEditedZipCode] = useState(zipCode);
    const [editedPhone, setEditedPhone] = useState(phone);
    const [editedHours, setEditedHours] = useState(hours);

    const [ errors, setErrors ] = useState([])

    const onSubmit = e => {
        e.preventDefault()
    }
    const onClick = e => {
        e.preventDefault()
    }
    return (
        <div className="input-box">
            <h1 className="business-title">Edit Business</h1>
            <form onSubmit={onSubmit}>
                <div className="content">
                    <ul className="errors">
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <div>
                        <input
                            className="signup-login-inputs"
                            type="text"
                            name="imageURL"
                            value={editedImageURL}
                            onChange={e => setEditedImageURL(e.target.value)}
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
                        <textarea
                            className="signup-login-inputs"
                            type="text"
                            name="description"
                            value={editedDescription}
                            onChange={e => setEditedDescription(e.target.value)}
                            placeholder="Business Details"
                            rows="20"
                            cols="80"
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
                </div>
                <div className="business-buttons-container">
                    <button type="submit" className="buttons">
                        Create
                    </button>
                    <button type="button" className="buttons" onClick={onClick}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBusinessForm;
