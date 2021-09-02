import React from 'react'
import Displayposts from './Displayposts'
import Newpost from './Newpost'
import './middle.css'

function Middle(props){

  return(
  <div>
    <Newpost />
    <Displayposts />
  </div>
  )
}

export default Middle