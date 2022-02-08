import { useParams } from "react-router-dom";

const BusinessPage = () => {
    const { businessId } = useParams();
    const businessIdNumerical = +businessId
    return <h1>business page {businessIdNumerical}</h1>;
};

export default BusinessPage;
