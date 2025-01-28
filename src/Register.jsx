import { useState } from "react"
import "./index.css"
const Register = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      })
    })
    const result = await response.json();
    console.log(result)
    console.log(firstname, lastname, email, password);
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }


  return (
    <div className="forms"><h2 className="page-title">Sign up</h2>
      <form onSubmit={registerUser}>
        <input placeholder="firstname" type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
        <input placeholder="lastname" type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} />
        <input placeholder="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button>Sign Up</button>
      </form>

    </div>
  )

}

export default Register