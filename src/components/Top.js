import React from 'react'
import App from '../App.js'
import '../styles/Top.css'

class Top extends React.Component {
	state = {
		showHomeButton: false
	}

	toggleShowHomeButton = () => {
		this.setState({
			showHomeButton: true
		})
	}


	render() {
		return (
		<>
		{this.state.showHomeButton ? <div className="top-bar">
     <div className="home-button" onClick={e => this.props.toggleShowHome(e)}>+</div>
			<div className="top-right">
			 <div>
				<h1 className="top-name">
				</h1>
				</div>
			</div>
		</div> : null}
		</>
		)
	}
}

export default Top
