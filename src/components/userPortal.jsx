import { Route, Routes } from "react-router-dom"
import BookList from "./bookList"
import ReadBook from "./readBook"
import UserDashboard from "./userDashboard"
import UserNavbar from "./userNavbar"

const UserPortal = () => {
    return(
        <div className="user-portal">
            <UserNavbar/>
            <Routes>
                    <Route path="/" element={<UserDashboard/>}/>
                    <Route path="/books-list/" element={<BookList/>}/>
                    <Route path="/books-list/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
    )
}

export default UserPortal
