import React from 'react'


class Sidebar extends React.Component {
	render() {
		return (
		<>
			<div className="color name-text name-box">
				<h1>Jacob Bidmead</h1>
			</div>
			<div className="description link1">
				<h1>Projects</h1>
			</div>
			<div className="description link2">
				<h1>Photography</h1>
			</div>
			<div onClick={e => this.props.showLinks(e)}className="description link3">
				<h1>Links</h1>
			</div>
		</>
		)
	}
}

export default Sidebar
