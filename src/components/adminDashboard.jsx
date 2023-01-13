import { Route, Routes } from "react-router-dom"
import Page404 from "./404Page"
import AddBook from "./addBook"
import AddUser from "./addUser"
import AdminHome from "./adminHome"
import AdminNavbar from "./adminNavbar"
import BookList from "./bookList"
import ReadBook from "./readBook"
import UserList from "./userList"

const AdminDashboard = () => {
    //In admin portal, we have used nested routing where we can add more routes and Browser Router will be used only once.

    return(
        <div className="admin-dashboard">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminHome/>}/>
                <Route path="/error-404/" element={<Page404/>}/>
                <Route path="/books-list/" element={<BookList/>}/>
                <Route path="/users-list/" element={<UserList/>}/>
                <Route path="/books-list/:id" element={<ReadBook/>}/> {/*route parameters*/}
                <Route path="/add-user/" element={<AddUser/>}/>
                <Route path="/add-book/" element={<AddBook/>}/>
            </Routes>
        </div>
    )
}

export default AdminDashboard