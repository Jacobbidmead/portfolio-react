import React from 'react'
import { useNavigate } from "react-router-dom";



const Sidebar = (props) => {
	const navigate = useNavigate();

		return (
	<>

			<div onClick={() => navigate('/about')} className=" button-style name-text name-box ">
				<h1>About</h1>
			</div>
			<div onClick={e => props.toggleShowProjects(e)}  className="button-style link1 ">
				<h1>Projects</h1>
			</div>
			<div onClick={e => props.toggleShowPhotos(e)}  className="button-style link2 ">
				<h1>Photo</h1>
			</div>
			<div onClick={e => props.toggleShowLinks(e)} className="button-style link3 ">
				<h1>Links</h1>
			</div>

	</>
		)
}

export default Sidebar
