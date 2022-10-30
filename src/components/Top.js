import React from 'react'
import App from '../App.js'
import '../styles/Top.css'

class Top extends React.Component {
	render() {
		return (
		<>
		<div className="top-bar">
     <div className="home-button" onClick={e => this.props.toggleShowHome(e)}>X</div>
			<div className="top-right">
			 <div>
				<h1 className="top-name">
				</h1>
				</div>
			</div>
		</div>
		</>
		)
	}
}

export default Top
