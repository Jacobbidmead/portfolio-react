import React from 'react'
import MagiKards from '../components/MagiKards.js'
import '../styles/Projects.css'

class Projects extends React.Component {
	class = {
		showMagiKards: false
	}

	toggleShowMagiKards = () => {
		this.setState({
			showMagiKards: this.state.showMagiKards ? true : false
		})
	}


	render() {
		return (
	<>
	  <div className="bg-fill">
		 <div className="text-container text"><h1>Personal Projects</h1></div>
      <div onClick={e => this.state.toggleShowMagiKards(e)}><MagiKards/></div>


			<div><img src="./images/project-img/abnb1.png" className="img-container"alt="" /></div>
	    <div><img src="./images/project-img/abnb2.png" className="img-container"alt="" /></div>
			<div><img src="./images/project-img/abnb3.png" className="img-container"alt="" /></div>
			<div><img src="./images/project-img/abnb4.png" className="img-container"alt="" /></div>
	    <div><img src="./images/project-img/abnb5.png" className="img-container"alt="" /></div>
			<div><img src="./images/project-img/abnb6.png" className="img-container"alt="" /></div>
			<div><img src="./images/project-img/google.png" className="img-container"alt="" /></div>

  </div>
	</>
		)
	}
}

export default Projects
