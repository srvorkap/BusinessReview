import { useEffect } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";

const BusinessPage = () => {
    const { businessId } = useParams();
    const businessIdNumerical = +businessId;
    const businessesObject = useSelector(store => store.business.entries);
    const businesses = Object.values(businessesObject);
    const currentBusiness = businesses?.find(
        business => business?.id === businessIdNumerical
    );
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);

    const onEdit = e => {
        e.preventDefault()
        history.push(`/businesses/${businessId}/edit`)
    }

    const onDelete = e => {
        e.preventDefault()
    }
    console.log(businesses);
    return (
        <div>
            <div>
                <img
                    src={currentBusiness.imageURL}
                    className="single-business-img"
                />
            </div>
            <div>
                <div>{currentBusiness.name}</div>
                <div>RATING</div>
                <div>{currentBusiness.hours}</div>
                <div>{currentBusiness.phone}</div>
            </div>
            <div>
                <div className="note-buttons-container">
                    <button type="button" className="buttons" onClick={onEdit}>
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
        </div>
    );
};

export default BusinessPage;
