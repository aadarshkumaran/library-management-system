import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/addUser.css'



const AddUser = () => {

    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        //data to be posted in json-server
        let userData = {name,age,email,phone}

        //post to server
        fetch(`http://localhost:1000/users/`,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body:JSON.stringify(userData)
        })

        alert(`${name} added Successfully`)
        navigate(`/admin/users-list/`)
    }
    return ( 
    <div className="add-user">
        <h1>Add User</h1>
        <hr />
        <div className="form">
            <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                    <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="age">
                    <input type="number" placeholder="age" min="1" value={age} onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="email">
                    <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                    <div className="phone">
                    <input type="tel" minLength="10" placeholder="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
    </div> 
    );
}
 
export default AddUser;