import '../App.css';
import './Error.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Animation from "../images/Animation.gif";

function Errorpage() {
    return(
        <>
            <section className="error-page">
                <div className="error-container">
                   
                    <h1>Error 404</h1>
                    <p>Oops! The page you're looking for doesn't exist.</p>
                    <Link to="/" className="error-link">
                        <button className="back-button">Back to Home Page</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Errorpage;
