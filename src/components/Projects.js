import React from 'react'
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

		  {this.props.showAirBnb ?
      <AirBnB toggleShowAirBnb={this.props.toggleShowAirBnb} toggleShowProjects={this.props.toggleShowProjects}/> : <button onClick={e => this.props.toggleShowAirBnb(e)}>AIRBNB</button>}


      {this.props.showMagiKards ? <MagiKards toggleShowMagiKards={this.props.toggleShowMagiKards} toggleShowProjects={this.props.toggleShowProjects}/> : <button onClick={e => this.props.toggleShowMagiKards(e)}>MagiKards</button>}


  </div>
</>
		)
	}
}

export default Projects
