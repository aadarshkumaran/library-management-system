import { Link } from 'react-router-dom'
import '../styles/adminNavbar.css'

const AdminNavbar = () => {
    
    return(
        <div className="admin-navbar">
            <div className="navbar">
                <div className="logo">
                    <h3>Admin Portal</h3>
                </div>
                <div className="link">
                <ul>
                    <li>
                        <Link to="/admin/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-book/">Add book</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-user/">Add User</Link>
                    </li>
                    <li>
                        <Link to="/admin/books-list/">Books List</Link>
                    </li>
                    <li>
                        <Link to="/admin/users-list/">Users List</Link>
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

export default AdminNavbar