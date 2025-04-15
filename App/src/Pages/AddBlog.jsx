import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import jwt_decode from "jwt-decode";
import {config} from "../Services/config"
import {addABlog} from "../Services/blog"


function AddBlog() {
  
  function goToSign()
  {
    navigate("/")
  }

  const navigate = useNavigate()
  
  const n =  sessionStorage.getItem("name")
    // console.log(sessionStorage.getItem("name", name))   
  // console.log(n)

  //Onclick of logout button go to signup page
  const[blogInfo, setBlogInfo] = useState({
    title : '',
    category:'',
    content: '',
  })

 const postBlog = async ()=>{
  
    if(blogInfo.title.length === 0)
    {
        toast.warn("Please enter the title")
    }
    else if(blogInfo.category.length === 0)
    {
        toast.warn("Please enter the Category")
    }
    else if(blogInfo.content.length === 0)
    {
        toast.warn("Add some content before adding.")
    }
    else
    {
        //Destructure the blogInfo
        const {title, category, content} = blogInfo
        const postDate = new Date()
        const author = n
        const token = sessionStorage.getItem("token")
        if (token) {
            const payload = jwt_decode(token);
            const userId = payload.userId;
            console.log("Decoded userId:", userId);
          }
        else
        {
            toast.error('Token is Missing')
        }
        
        //API call

        const result = await addABlog(title, content, category,userId, postDate, author)
    }

 }


  return (
    <div>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">New Blog</a>
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
        <h2 style = {{textAlign : "center"}}>Add Blogs</h2>
        <div style={{display:"flex", flexDirection:"column", gap:"10px", marginTop:"20px", marginLeft:"40%"}}>
            <div style={{display:"flex", gap:"5px"}}>
                <label>Title : </label>
                <input onChange={(e)=>{setBlogInfo({...blogInfo, title : e.target.value}); console.log(blogInfo.title)}} type="text" placeholder="Title"></input>
            </div>
            <div style={{display:"flex", gap:"5px"}}>
                <label >Category :</label>
                    <select onChange={(e)=>{setBlogInfo({...blogInfo, category : e.target.value}); console.log(e.target.value)}} name ="Category" id="Category">
                    <option value = '' >options</option>
                    <option value="Java">Java</option>
                    <option value="Technology">Technology</option>
                    <option value="Movie">Movie</option>
                    <option value="Life">Life</option>
                    </select>
            </div> 
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px" }}>
            <textarea rows={"10"} cols={"80"} onChange={(e)=>{setBlogInfo({...blogInfo, content : e.target.value}); console.log(blogInfo.content)}} />  
        </div>
        <div style={{display:"flex", marginLeft:"45%", marginTop:"10px"}}>
          <button onClick={postBlog} type="button" className="btn btn-dark">Add Blog</button>
        </div>
    </div>
  )
}

export default AddBlog
