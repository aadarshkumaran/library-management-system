import { useEffect, useState } from 'react'
import '../styles/adminHome.css'

const AdminHome = () => {
    let Photo = "https://www.greenwichlibrary.org/wp-content/uploads/2016/02/Pattern-BG-EXPLORE.png"

    let [blog,updateBlog] = useState([])

    useEffect(()=>{
        let fetchBlogs = async() => {
            let blogData = await fetch('http://localhost:1000/blogs')
            let data = await blogData.json()
            updateBlog(data)
        }
        fetchBlogs()
    },[blog])

    return(
        <div className="admin-home">
            <h1>Welcome admin home</h1>
            <hr />
            <br />
            {
                blog.map((data)=>(
                    <div className="container-content">
                        <div className="image-background">
                            <img src={Photo} alt=""/>
                        </div>
                        <div className="blog-content">
                            <div className="container">
                                <div className="title-link">
                                    <h4>
                                        <a href="/admin/error-404/">{data.title}</a>
                                    </h4>
                                </div>
                                <div className="posted-by">
                                    <p>By <b>{data.author}</b> on <i>{data.date}</i></p>
                                </div>
                                <br />
                                <div className="short-desc">
                                    {data.shortDescription}</div>
                                <br />
                                <div className="read-more">
                                    <a href="/admin/error-404/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>    
                ))
            }
        </div>
    )
}

export default AdminHome