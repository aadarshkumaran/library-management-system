import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/adminLogin.css"



const AdminLogin = () =>{

    let[email,updateEmail] = useState('')//updating the email to the server using useState 
    let[password,updatePassword] = useState('')
    let navigate = useNavigate()

    //e is just a parameter to prevent default
    let adminLogin = (e) =>{
        e.preventDefault()
        let data = {email,password}
        //the purpose of useNavigate is to navigate to another location/webpage once the user/admin is logged in with correct credentials
        if( email === "admin@xyz.com" && password === "123"){
            navigate('/admin')
        }
        else{
            alert(`Invalid Credentials`)
        }
    }

    return(
        <div className="admin-login">
            <div className="login-form-container">
                <h1>Admin Login</h1>
                <div className="form_input">
                    <form onSubmit={adminLogin}>
                        <div className="email">
                        <input type="email" required placeholder="Enter your E-mail Address" value={email} onChange={(e)=>updateEmail(e.target.value)}/>
                        </div>
                        <div className="password">
                        <input type="password" required placeholder="Enter Password" value={password} onChange={(e)=>updatePassword(e.target.value)} />
                        </div>
                        <div className="login-button">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin