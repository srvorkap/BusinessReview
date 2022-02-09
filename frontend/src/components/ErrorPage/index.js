import { Redirect } from 'react-router-dom';
import errorPage from '../../images/404.png'

const ErrorPage = ({sessionUser}) => {
    if (!sessionUser) return <Redirect to="/" />;
    return (
        <img src={errorPage} />
    )
}

export default ErrorPage
