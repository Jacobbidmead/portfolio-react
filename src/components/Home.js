import React from 'react'

class Home extends React.Component {
	render() {
		return (
			<>
				  <div className="main-display">
					 <div>
							<div className="box3">
						</div>
						<div className="box4">
						  <div className="greet">
								  <h3 className="greeting">Hi.    My name is</h3>
							</div>
						</div>
						<div className="box5">
						</div>
					   <div>
						    <h1 className="main-page  first-name" >JACOB</h1>
						</div>
						<div >
								  <img src="images/umbrella.png" alt="" className="box2"/>
						</div>
						</div>
						<div>
						<div>
								 <h1 className="main-page last-name">BIDMEAD</h1>
						</div>
						<div className="box">
						</div>
						<div>
							  <h3 className="main-page photographer">PHOTOGRAPHER</h3>
						</div>
						</div>
						<div>
						<div><small className="small">I'm a</small></div>
							<div>
							  <h1 className="main-page web">WEB</h1>
						  </div>
						</div>
						<div>
							<div>
							  <h1 className="main-page  developer">DEVELOPER</h1>
						  </div>
							<div>
							  <h1 className="main-page  designer">& DESIGNER</h1>
						  </div>
						</div>
					</div>
				 </>
		)
	}
}

export default Home
