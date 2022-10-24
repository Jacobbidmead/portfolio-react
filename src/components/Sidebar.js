import React from 'react'



class Sidebar extends React.Component {
	render() {
		return (
	<>
		<div className="button-container">
			<div onClick={e => this.props.toggleShowAbout(e)} className="color name-text name-box">
				<h1>://About</h1>
			</div>
			<div className="description link1">
				<h1>://Projects</h1>
			</div>
			<div className="description link2">
				<h1>://Photo</h1>
			</div>
			<div onClick={e => this.props.toggleShowLinks(e)} className="description link3">
				<h1>://Links</h1>
			</div>
		</div>
	</>
		)
	}
}

export default Sidebar
