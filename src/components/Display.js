import React from 'react'
import '../styles/Links.css'
import Links from './Links.js'

class Display extends React.Component {
	state = {
		showAllLinks: false
	}

	showLinks = (e) => {
		this.setState({
			showAllLinks: true
		})
	}


	render() {
		return (
		<>
			{this.state.showAllLinks ? <div className="main-display">
        <Links/>
      </div> : null}
		</>
		)


	}
}

export default Display
