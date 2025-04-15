import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  
  function goToSign()
  {
    navigate("/")
  }

  const navigate = useNavigate()

  function addBlog()
  {
    navigate('/addblog')
  }
  
  const n =  sessionStorage.getItem("name", name)
    // console.log(sessionStorage.getItem("name", name))   
  // console.log(n)

  //Onclick of logout button go to signup page

  return (
    <div>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#" onClick={addBlog}>New Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">All Blogs</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">My Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Find Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Categories</a>
  </li>
  <li>
    <div style={{display:"flex", position:"relative" , marginLeft:"100%", padding:"10px"}}>
      <button onClick={goToSign} type="button" className="btn btn-primary">Logout</button>
    </div>
  </li>
  
</ul>
      <h1 style = {{textAlign : "center"}}>Sunbeam Blogs</h1>
        <div style={{display:'flex', marginLeft:"30px", marginRight:"30px"}}>
          <h3>Hello, {n} </h3>
        </div>
        <div style={{display:"flex", gap:"10px", marginTop:"20px", marginLeft:"60%"}}>
          <label>Category</label>
          <input type="text" placeholder="category"></input>
        </div>
        <div style={{display:"flex", marginLeft:"62%", marginTop:"10px"}}>
          <button type="button" className="btn btn-dark">Add Category</button>
        </div>
    </div>
  )
}

export default Home
