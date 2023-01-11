import { Link } from "react-router-dom"

const UserNavbar = () => {
    return(
        <div className="user-navbar">
            <div className="navbar">
                <div className="logo">
                    <h3>User Portal</h3>
                </div>
                <div className="link">
                <ul>
                    <li>
                        <Link to="/user/">Home</Link>
                    </li>
                    <li>
                        <Link to="/user/books-list/">Books List</Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default UserNavbar