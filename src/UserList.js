import {useState,useEffect} from 'react'
import axios from'axios'


function UserList() {

    const [list,setList] = useState([])

    useEffect(() => {
      
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setList(res.data))
        .catch(err => alert(err))
      
    }, [])
  
    return (
      <div className="Person">
          <ul>
         {list.map(el=>
        <div className="data">
        <h1 >{el.name} </h1>
        <p>username : <span>{el.username}</span></p>
        <p>email : <span>{el.email}</span></p>
        <p>GSM : <span>{el.phone}</span></p>
        <p>Website : <span>{el.website}</span></p>
        <p>street : <span>{el.address.street}</span></p>
        <p>sweet : <span>{el.address.sweet}</span></p>
        <p>adress  : <span>{el.address.city}</span></p>
        <p>Name : <span>{el.company.name}</span></p>
        <p>CatchPhrase : <span>{el.company.catchPhrase}</span></p>
         <p>Bs : <span>{el.company.bs}</span></p> 
        </div>
          )}
          </ul>
      </div>
    );
  }
export default UserList

