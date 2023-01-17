import { useState } from "react";

import { useParams } from "react-router-dom";


const ReadBook = (props) => {
    let [book,setBook] = useState([])    

    let params = useParams()

    useState(() => {

        let fetchData = async() => {

            let bookData  = await fetch(`http://localhost:1000/books/${params.id}`)

            let data = await bookData.json()

            setBook(data)
        }
        fetchData()
    },[])




    return ( 
        <div className="ReadBook">
          <h1>Whats in "{book.title}" ?</h1>
          {
            <div className="info">
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
          }
         
        </div>
     );
}
 
export default ReadBook;