import React from 'react'


function Newpost(props){

  return(
  <div className="new-post-master-div">
    <div className="new-post">
    <div className="user-profile-pic"></div>
    <input type="text" className="new-post-text-input"></input>
    </div>
    <button class="new-post-btn">Post</button>
  </div>
  )
}

export default Newpost