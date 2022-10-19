import React from 'react'

class Sidebar extends React.Component {
	render() {
		return (
		<>
			<div className="color name-text name-box">
				<h1>Jacob Bidmead</h1>
			</div>
			<div className="description link1">
				<h3>./projects</h3>
			</div>
			<div className="description link2">
				<h3>./photography</h3>
			</div>
			<div className="description link3">
				<h3>./links</h3>
			</div>
		</>
		)
	}
}

export default Sidebar
