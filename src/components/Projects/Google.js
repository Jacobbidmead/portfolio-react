import React from 'react'

class Google extends React.Component {
	render() {
		return (
			<>
			<div className="return-projects" onClick={e => this.props.toggleShowProjects(e)}><img src="images/left-arrow.png" className="arrow"/></div>
			<div className="google-container">
					<img src="./images/project-img/google.png" className=" google-img"alt="" />
					<div className="google-text">
					<p>Google this is a test</p>
					</div>
			</div>
			</>
		)
	}
}

export default Google
