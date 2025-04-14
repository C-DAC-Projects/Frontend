import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function SignUp() {

    const [userInfo, setUserInfo] = useState({
        name : '' ,
        email : '',
        password : '',
    })

    const signup = ()=>{

        if(userInfo.name.length === 0)
        {
            toast.warn("Please enter your name")
        }
        else if (userInfo.email.length == 0) {
            toast.warn('Please enter email')
    }
        else if (userInfo.password.length == 0) {
            toast.warn('Please enter password')
    }
    else{

        //API call
        // const result = 
    }
}

    return (
        <div className='col'>
            <h1 style={{textAlign:"center"}}>Sign Up</h1>
                <div style={{backgroundColor:"pink", display:"flex", flexDirection:'column', marginLeft:"20%", marginRight:"20%", paddingBottom:"20px", borderRadius:"10px"}}>
                    <div className="container mt-3">
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label style={{ marginBottom:"5px"}}>Name</label>
                            <input onChange={(e)=>{setUserInfo({...userInfo, name : e.target.value}); }} type="text" className="form-control" placeholder="name" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                            <label style={{ marginBottom:"5px"}}>Email</label>
                            <input onChange={(e)=>{setUserInfo({...userInfo, email : e.target.value}); }} type="email" className="form-control" placeholder="email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                            <label style={{ marginBottom:"5px"}}>Password</label>
                            <input onChange={(e)=>{setUserInfo({...userInfo, password : e.target.value}); }} type="password" className="form-control" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <button onClick={signup} type="button" className="btn btn-primary" style={{marginTop:"10px"}}>Sign Up </button>
                        <span style={{marginLeft:"10px"}}>Already have an account?<Link to="/">Login</Link></span>    
                    </div>
                </div>
          </div>
      )
    }
    
    export default SignUp
