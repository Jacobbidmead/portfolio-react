import React from 'react'
import App from '../App.js'
import MagiKards from '../components/Projects/MagiKards.js'
import AirBnB from '../components/Projects/AirBnB.js'
import Google from '../components/Projects/Google.js'
import '../styles/Projects.css'


class Projects extends React.Component {

	render() {
		return (
	<>
	<div className="bg-fill">
		 <div className="header"><h1 className="header">Personal Projects</h1></div>


    	<button onClick={e => this.props.toggleShowAirBnb(e)}>Show</button>


			<AirBnB toggleShowAirBnb={this.props.toggleShowAirBnb}/> 


			<MagiKards />
      <Google />
  </div>
</>
		)
	}
}

export default Projects
