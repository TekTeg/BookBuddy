import { useEffect, useState } from "react"
import BookList from "./BookList"
import PageSelector from "./PageSelector"
import UserDetails from "./UserDetails"
const Login = (props) => {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [serverResponse, setServerResponse] = useState({})
  const [token, setToken] = useState('')
  const [user, setUser] = useState("")

  const loginAttempt = async () => {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      })
      const result = await response.json()
      console.log(result)
      setServerResponse(result)
      console.log(result.token)
      setToken(result.token)
      setLoginEmail('');
      setLoginPassword('')
    }
    catch (err) { console.log(err) }
  }

  return (
    
    <div className="forms">
     {token? <><UserDetails token={token}/><h4>You are logged in</h4><PageSelector/></>:
    <>
   
      <h2 className="page-title">Login</h2>
      {
        serverResponse.message ? <h4>{serverResponse.message}</h4> : null
      }
      <form onSubmit={(event) => {
        event.preventDefault();
        loginAttempt();
       

      }}>
        {/* <h1>{user.firstname}</h1> */}
        <input value = {loginEmail} placeholder="loginEmail" type="email" onChange={(event) => { setLoginEmail(event.target.value) }} />
        <input value = {loginPassword} placeholder="loginPassword" type="password" onChange={(event) => { setLoginPassword(event.target.value) }} />
        <button > Login</button> 
      </form>
    </>
}
    </div>
  )
}
export default Login