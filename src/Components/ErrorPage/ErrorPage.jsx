import { useNavigate } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = () => {

    let navigate = useNavigate() ;

const handleGoBack = () => {
    navigate(-1)
}

    return (
        <div className="page">
            <h1>Oops...</h1>
            <p>An unexpected error has occurred</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;