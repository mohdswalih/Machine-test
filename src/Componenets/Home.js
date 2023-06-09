// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

// const [image,setImage] = useState("")
//   const userName = JSON.parse(localStorage.getItem("user"));
// const submitImage=()=>{
//   const data =new FormData()
//   data.append("file",image)
//   data.append("upload_preset","TestAbhiram") 
// data.append("cloud_name","dj1e5z8zn")

// fetch("https://api.cloudinary.com/v1_1/dj1e5z8zn/image/upload",{
//   method:"post",
//   body:data

  
// })
// navigate("/tnx")

// .then((res)=>res.json())
// .then ((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err)
// })


// }
//   return (
//     <>
//     <div>
//       <h1>WELCOME____ {userName.name}</h1>
//       <label for="img">Select image:</label>
//       <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
//       <button onClick={submitImage}>submit</button>
//     </div>
//     </>

//   )

// }

// export default Home



import React, {  } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


const Home = () => {

  
  const userName = JSON.parse(localStorage.getItem("user"));
  





  return (
    <div style={{textAlign:'right'}}>
<div  >
      <h3 style={{display:'inline-block'}} >Hi__{userName.name}   

      </h3>
      <button style={{ backgroundColor: 'skyblue', padding: '6px', borderRadius: '5px' }}>
      <Link style={{textDecoration:'none'}}  to="/" id='butn'>Logout</Link>
      </button>
     
    </div>
    
    <div className='icons' style={{alignItems:'center'}}>
      <h2>Enter you organization name</h2>
      <input type="text" placeholder="Enter organization name" name="uname"style={{textAlign:'center'}}/>
      <h4>Select your organization type below</h4>


    </div>
    </div>

  )

}

export default Home

