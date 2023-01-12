import { useNavigate } from "react-router-dom"
import '../styles/userLogin.css'

const UserLogin = () =>{
    let navigate = useNavigate()
    let userLogin = () =>{
        navigate('/user/')
    }
    return(
        <div className="user-login">
            <div className="login-form-container">
                <h1>User Login</h1>
                <div className="form_input">
                    <form onSubmit={userLogin}>
                        <div className="email">
                        <input type="email" required placeholder="Enter your E-mail Address" /*value={email} onChange={(e)=>updateEmail(e.target.value)}*//>
                        </div>
                        <div className="password">
                        <input type="password" required placeholder="Enter Password" /*value={password} onChange={(e)=>updatePassword(e.target.value)} *//>
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

export default UserLogin