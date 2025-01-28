import { useState } from "react"
import './index.css'
const UserDetails = (props) => {
  console.log(props)
  const [user, setUser] = useState('')
  const getUserdetails = async () => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {

      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      }
    })

    const result = await response.json()
    setUser(result)
    console.log(result)
  }
  return (
    <div className="profile">
      <h4 onClick={()=>getUserdetails()} id="user-profile">User Profile</h4>
      {
        user.firstname? <>
        <p>Name: {user.firstname.toUpperCase()} {user.lastname.toUpperCase()}</p>
        <p id = "email-paragraph">Email: {user.email} </p></>
        :null
        }

    </div>)
}
export default UserDetails
