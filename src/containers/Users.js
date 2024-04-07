
import React,{useState}  from 'react';
function Users(){
    const [Users,setUsers] = useState(
        { name: 'mohan',age:23},
        { name: 'sohan',age:57}
    )
    return(
        <div>
            <h2>Users</h2>
            <ul>
                {
                    Users.map((user,index) => {
                        return <li>{user.name}, {user.age}</li>
                    })
                }
                </ul> 
        </div>
    )

}
export default Users;