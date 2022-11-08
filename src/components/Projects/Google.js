import React from 'react'

class Google extends React.Component {
	render() {
		return (
			<>
			<div className="return-projects" onClick={e => this.props.toggleShowProjects(e)}>Back to Projects</div>
			<div className="google-container">
					<img src="./images/project-img/google.png" className="img-container google-img"alt="" />
					<div className="google-text">
					<p>Google this is a test</p>
					</div>
			</div>
			</>
		)
	}
}

export default Google
