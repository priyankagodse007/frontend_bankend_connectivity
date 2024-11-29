import { Link } from "react-router-dom";

function Header(){
return (<nav className="d flex justify-content-around bg-primary">
    <h1>welcome Router</h1>
    <div className="mt-2">
        <Link className="btn btn-dark fs-5 me-2" to={'/home'}>Home</Link>
        <Link className="btn btn-dark fs-5 me-2" to={'/about'}>About</Link>
        <Link className="btn btn-dark fs-5 me-2" to={'/courses'}>Courses</Link>
        <Link className="btn btn-dark fs-5 me-2" to={'/contact-us'}>Enquiry</Link>
        <Link className="btn btn-dark fs-5 me-2" to={'/login'}>Sign-In</Link>


    </div>
</nav>
);
}
export default Header;