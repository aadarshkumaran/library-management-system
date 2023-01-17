import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import '../styles/bookList.css'

const BookList = () => {
    let [book,updateBook] = useState([])

    useEffect(()=>{
        let fetchBooks = async() => {
            let bookData = await fetch('http://localhost:1000/books')
            let data = await bookData.json()
            updateBook(data)
        }
        fetchBooks()
    },[book])//[state variable] dependency - no need to refresh in order to check whether the book is deleted in json server or not

    //delete functionality via json-server
    let handleDelete = (id,title) => {
        fetch(`http://localhost:1000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} is permanently deleted from server!`)
    }

    let navigate = useNavigate()
    let location = useLocation()//to display button when it is in admin mode,
    let read = (id) =>{
        if(location.pathname == '/admin/books-list/')
        navigate(`/admin/books-list/${id}`)
        else navigate(`/user/books-list/${id}`)
    }

    return(
        <div className="book-list">
            <h1>Total Books : {book.length}</h1>
            <div className="books-section">
            <hr />
                {
                    book.map((data)=>(
                        <div className="book-card">
                            <div className="book-image">
                                <img src={data.thumbnailUrl} alt="" />
                            </div>
                            <div className="book-card-content">
                            <h2>{data.title}</h2> <br />
                            <h6><b>Authors: </b>{data.authors}</h6> <br />
                            <h4>Category: {data.categories}</h4> <br />
                            <h4>Page Count: {data.pageCount}</h4> <br />
                            <button className="read-button" onClick={()=>read(data.id)}>Read More</button>
                            {/* If the user is admin and location of path is /admin/books-list, display the delete button , user is not supposed to delete the book */}
                            {location.pathname === '/admin/books-list/' && <button className="delete-button" onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BookList