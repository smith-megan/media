import "./Email.css";
import React from 'react'
function Email() {
  function sendEmail(){
    //send the email in
  }
  
  return (
    <div>
      <p>We are coming soon add your email here to be notified when we go into beta:</p>
      <input type="text"></input>
      <button onClick={()=>{sendEmail()}}>submit</button>
    </div>
  )
}

export default Email