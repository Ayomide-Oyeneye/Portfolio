import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Animation from "../images/Animation.gif" ;
function Errorpage() {
    return(
        <>
<section classNmae="error-page">
    <div>
        <p>Error 404</p>
        <img src={Animation} alt="logo" className='four-img' />
        <Link to="/">bbbb</Link>
    </div>
</section>
        </>
    );
};
export default Errorpage;