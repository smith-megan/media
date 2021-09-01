import React from 'react'
import Displayposts from './Displayposts'
import Newpost from './Newpost'

function Middle(props){

  return(
  <div>
    <p>Middle</p>
    <Newpost />
    <Displayposts />
  </div>
  )
}

export default Middle