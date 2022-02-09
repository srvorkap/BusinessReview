import { useEffect } from "react";
import { NavLink, useParams, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { deleteBusiness } from "../../store/business";

const BusinessPage = () => {
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

    useEffect(() => {
        dispatch(getBusinesses());
    }, [dispatch]);

    const onEdit = e => {
        e.preventDefault();
        history.push(`/businesses/${businessId}/edit`);
    };

    // On delete open conformation form
    const onDelete = e => {
        e.preventDefault();
    };

    // On yes send delete request
    const onYes = async e => {
        e.preventDefault();
        dispatch(deleteBusiness(businessIdNumerical));
        history.goBack();
    };

    const onNo = e => {
        e.preventDefault();
        history.goBack();
    };

    const onReview = e => {
        e.preventDefault()
        history.push('/reviews/new')
    }

    // dynamic rendering of write a review and edit/delete buttons
    let srkica;
    if (sessionUser.id === currentBusiness.userId)
        srkica = (
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
                <div>
                    <h1>
                        Are you sure you want to delete {currentBusiness?.name}
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
            </>
        );
        else srkica = (
            <button type="button" className="buttons" onClick={onReview}>
                Write a Review
            </button>
        )
    return (
        <>
            <div>
                <img
                    src={currentBusiness?.imageURL}
                    className="single-business-img"
                />
            </div>
            <div>
                <div>{currentBusiness?.name}</div>
                <div>RATING</div>
                <div>{currentBusiness?.hours}</div>
                <div>{currentBusiness?.phone}</div>
            </div>
            {srkica}
        </>
    );
};

export default BusinessPage;
