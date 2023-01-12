import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addBook.css'

const AddBook = () => {
    //title,categories,authors,pageCount,shortdesc, shortdesc, thumbnailurl
    let [title,setTitle] = useState("")
    let [categories,setCategory] = useState("")
    let [authors,setAuthor] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setShort] = useState("")
    let [longDescription,setLong] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        //data to be posted in json-server
        let bookData = {title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //post to server
        fetch(`http://localhost:1000/books/`,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body:JSON.stringify(bookData)
        })

        alert(`${title} added Successfully`)
        navigate(`/admin/books-list/`)
    }

    return ( 
    <div className="add-book">
        <h1>Add a Book</h1>
        <hr />
        <div className="form-container">
            <div className="form-add-book">
            <form action="" onSubmit={handleSubmit}>
                <div className="title">
                    <input value={title} type="text" required placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="authors">
                    <input value={authors} type="text" required placeholder="Enter Author" onChange={(e)=>setAuthor(e.target.value)} />
                </div>
                <div className="categories">
                    <input value={categories} type="text" required placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)}/>
                </div>
                <div className="page-count">
                    <input value={pageCount} type="text" required placeholder="Enter Total no. of Pages" onChange={(e)=>setPage(e.target.value)} />
                </div>
                <div className="short-desc">
                    <textarea value={shortDescription} required placeholder="Enter Short Description" onChange={(e)=>setShort(e.target.value)} />
                </div>
                <div className="short-desc">
                    <textarea value={longDescription}  required placeholder="Enter Long Description" onChange={(e)=>setLong(e.target.value)} />
                </div>
                <div className="thumbnail-url">
                    <input value={thumbnailUrl} type="text" required placeholder="Enter the thumbnail URL" onChange={(e)=>setUrl(e.target.value)} />
                </div>
                    <button>Add Book</button>
            </form>
            </div>
        </div>
    </div> 
    );
}
 
export default AddBook;