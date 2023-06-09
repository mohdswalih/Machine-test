



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

