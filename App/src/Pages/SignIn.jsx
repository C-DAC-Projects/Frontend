import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {loginUser} from '../Services/user'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { loginUser } from '../services/user'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  //For Password view button
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
 
  // get the navigate function reference
  const navigate = useNavigate()

  const onLogin = async() => {
    if (email.length === 0) {
      toast.warn('Please enter email')
    } else if (password.length === 0) {
      toast.warn('Please enter password')
    }
     else {
//       // make the API call
      const result = await loginUser(email, password)
      if (result['status'] == 'success') {
        toast.success(`Welcome ${result['data'].name}`)

//         // get the user info
        const { token, name, email } = result['data']
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('name', name)
        sessionStorage.setItem('email', email)

        // navigate to home screen
        navigate('/home')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
        <div className='col'>
            <div className="bg-image"></div>
                <div className="bg-text">
                    <h1 style={{textAlign:"center"}}>Sign In</h1>
                        <div style={{backgroundColor:"pink", display:"flex", flexDirection:'column', marginLeft:"30%", marginRight:"30%", paddingBottom:"20px", borderRadius:"10px"}}>
                            <div className="container mt-3">
                                <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                                    <label style={{ marginBottom:"5px"}}>Email</label>
                                    <input onChange={(e)=>{setEmail(e.target.value);}} type="email" className="form-control" placeholder="email" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                                <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                                    <label style={{ marginBottom:"5px"}}>Password</label>
                                    <input onChange={(e)=>{setPassword(e.target.value);}} type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                                <button onClick={onLogin} type="button" className="btn btn-primary" style={{marginTop:"10px"}}>Sign In</button>    
                                <span style={{marginLeft:"10px"}}>Don't have an account?<Link to="/signup">Sign up</Link></span>    
                            </div>
                        </div>
                </div>
            </div>
  )
}

export default SignIn
