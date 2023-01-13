import '../styles/404Page.css'

const Page404 = () =>{
    return(
        <div className="error-404">
            <div className="error-content">
            <h1>Oops!</h1>
            <p className='text'>We can't seem to find the page you're looking for.</p>
            <p className='error-code'><b>Error code: 404</b></p>
            </div>
            <div className="image-404">
                <img src="/images/404-error.gif" alt="" />
            </div>
        </div>
    )
}

export default Page404