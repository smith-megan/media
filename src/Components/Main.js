import React from 'react'
import Left from "./Left.js"
import Middle from "./timeline/Middle.js"
import Right from "./Right.js"

function Main(){
  return(
		<div className="container grid">
			<div className="left">
				<Left />
			</div>
			<div className="middle">
				<Middle />
			</div>
			<div className="right">
				<Right />
			</div>
		</div>
)}
export default Main