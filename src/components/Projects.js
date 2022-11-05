import React from 'react'
import MagiKards from '../components/Projects/MagiKards.js'
import AirBnB from '../components/Projects/AirBnB.js'
import Google from '../components/Projects/Google.js'
import '../styles/Projects.css'


class Projects extends React.Component {
	class = {
		showDefaultProject: true,
		showMagiKards: false,
		showAirBnb: false,
		showGoogle: false
	}

 toggleShowAirBnb = () => {
	 this.setState({
		 showAirBnb: true
	 })
 }


	render() {
		return (
	<>
	<div className="bg-fill">
		 <div className="header"><h1 className="header">Personal Projects</h1></div>
		  <AirBnB />
      <MagiKards/>
     <button>Show</button>
			 <Google />
  </div>
</>
		)
	}
}

export default Projects
