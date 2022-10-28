import React from 'react'



class Sidebar extends React.Component {
	render() {
		return (
	<>
		<div className="button-container">
			<div onClick={e => this.props.toggleShowAbout(e)} className=" button-style name-text name-box ">
				<h1>About</h1>
			</div>
			<div onClick={e => this.props.toggleShowProjects(e)}  className="button-style link1 ">
				<h1>Projects</h1>
			</div>
			<div onClick={e => this.props.toggleShowPhotos(e)}  className="button-style link2 ">
				<h1>Photo</h1>
			</div>
			<div onClick={e => this.props.toggleShowLinks(e)} className="button-style link3 ">
				<h1>Links</h1>
			</div>
		</div>
	</>
		)
	}
}

export default Sidebar
