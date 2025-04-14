import React from 'react'
import { Link } from 'react-router-dom'

// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { loginUser } from '../services/user'

function SignIn() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   // get the navigate function reference
//   const navigate = useNavigate()

//   const onLogin = async () => {
//     if (email.length == 0) {
//       toast.warn('Please enter email')
//     } else if (password.length == 0) {
//       toast.warn('Please enter password')
//     } else {
//       // make the API call
//       const result = await loginUser(email, password)
//       if (result['status'] == 'success') {
//         toast.success('Welcome to task manager')

//         // get the user info
//         const { token, name } = result['data']
//         sessionStorage.setItem('token', token)
//         sessionStorage.setItem('name', name)

//         // navigate to home screen
//         navigate('/home')
//       } else {
//         toast.error(result['error'])
//       }
//     }
//   }

  return (
    <div className='col'>
        <img src=""/>
            <h1 style={{textAlign:"center"}}>Sign In</h1>
                <div style={{backgroundColor:"pink", display:"flex", flexDirection:'column', marginLeft:"20%", marginRight:"20%", paddingBottom:"20px", borderRadius:"10px"}}>
                    <div className="container mt-3">
                        <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                            <label style={{ marginBottom:"5px"}}>Email</label>
                            <input type="email" class="form-control" placeholder="email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                            <label style={{ marginBottom:"5px"}}>Password</label>
                            <input type="password" class="form-control" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <button type="button" className="btn btn-primary" style={{marginTop:"10px"}}>Sign In</button>    
                        <span style={{marginLeft:"10px"}}>Don't have an account?<Link to="/signup">Sign up</Link></span>    
                    </div>
                </div>
          </div>
  )
}

export default SignIn
