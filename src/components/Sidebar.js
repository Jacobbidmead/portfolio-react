import React from 'react'



class Sidebar extends React.Component {
	render() {
		return (
	<>

			<div onClick={e => this.props.toggleShowAbout(e)} className=" button-style name-text name-box ">
				<small>01</small><h1>About</h1>
			</div>
			<div onClick={e => this.props.toggleShowProjects(e)}  className="button-style link1 ">
				<small>02</small><h1>Projects</h1>
			</div>
			<div onClick={e => this.props.toggleShowPhotos(e)}  className="button-style link2 ">
				<small>03</small><h1>Photo</h1>
			</div>
			<div onClick={e => this.props.toggleShowLinks(e)} className="button-style link3 ">
				<small>04</small><h1>Links</h1>
			</div>

	</>
		)
	}
}

export default Sidebar
