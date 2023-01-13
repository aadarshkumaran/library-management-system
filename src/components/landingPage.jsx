import { Link } from "react-router-dom";
import "../styles/landingPage.css"

const LandingPage = () =>{
    let redUser = '/images/red-login.png'
    let greenUser = '/images/green-login.png'
    return(
        <div className="landingPage">
            <div className="image-png">
                <img src="images/book-reading.png" alt="" />
            </div>
            <div className="select-login">
                <div className="login-form">
                <h1>Library Management System</h1>
                <div className="login-button">
                <img style={{width:'25px'}} src={redUser} alt="" />
                <div>
                <Link id="admin-login" to='/admin-login'>Login as Admin</Link>
                </div>
                <img style={{width:'25px'}} src={greenUser} alt="" />
                <div>
                <Link id="user-login" to='/user-login'>Login as User</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;