import { useEffect, useState } from "react"
import '../styles/userList.css'

const UserList = () => {
    let [user,updateUser] = useState([])

    useEffect(()=>{
        let fetchUsers = async() => {
            let fetchx = await fetch('http://localhost:1000/users')
            let userx = await fetchx.json()
            updateUser(userx)
        }
        fetchUsers()
    },[])

    let handleDelete = (id,name) =>{
        updateUser(user.filter((x)=>x.id != id))
        alert(`${name} has been deleted successfully!`)
    }

    return(
        <div className="user-list">
            <h1>User Count : {user.length}</h1>
            <hr />
            <div className="users-section">
            {
                user.map((x)=>(
                    <div className="user-card">
                    <div className="user-card-content">
                            <h2>{x.name}</h2> <br />
                            <h6><b>Age: </b>{x.age}</h6> <br />
                            <h4>E-mail: {x.email}</h4> <br />
                            <h4>Phone: {x.phone}</h4> <br />
                            <button className="delete-button" onClick={()=>handleDelete(x.id,x.name)}>Delete</button>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default UserList