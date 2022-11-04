import React from 'react'
import MagiKards from '../components/MagiKards.js'
import '../styles/Projects.css'


class Projects extends React.Component {
	class = {
		showDefaultProj: true,
		showMagiKards: true,
		showAirBnb: false,
		showGoogle: false
	}




	render() {
		return (
	<>

	  <div className="bg-fill">
		 <div className="header"><h1 className="header">Personal Projects</h1></div>


		<MagiKards/>




			<div>
					<img src="./images/project-img/abnb1.png" className="img-container"alt="" />
			</div>
	    <div>
					<img src="./images/project-img/abnb2.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb3.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb4.png" className="img-container"alt="" />
			</div>
	    <div>
					<img src="./images/project-img/abnb5.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb6.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/google.png" className="img-container"alt="" />
			</div>

  </div>
</>
		)
	}
}

export default Projects
