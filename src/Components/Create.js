import React from 'react'
function Create(){

	return(
		<div className="ui page dimmer off" id="signupmodal_dim">
			<div className="ui modal" id="modal_signup">
				<div className="header">New User?</div>
				<div className="content">
					<form className="ui form" id="user_create-form">
						<div className="field required">
							<div className="ui left icon input">
								<i className="user icon"></i>
								<input
									type="text"
									name="text"
									placeholder="Username"
									required
								/>
							</div>
						</div>
						<div className="field required">
							<div className="ui left icon input">
								<i className="lock icon"></i>
								<input
									type="password"
									name="password"
									placeholder="Password"
									required
								/>
                <p>hi!!!</p>
							</div>
						</div>
						<button className="ui button" type="submit">Submit</button>
						<div className="ui display error message active"></div>
					</form>
				</div>
			</div>
		</div>
  )
}
export default Create