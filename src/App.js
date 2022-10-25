import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Top from './components/Top.js'
import Projects from './components/Projects.js'


class App extends React.Component {
	state = {
		showHome: true,
		showLinks: false,
		showAbout: false,
		showPhotos: false,
		showProjects: false
	}

	toggleShowHome = () => {
		this.setState({
			showHome: false
		})
	}


	toggleShowLinks = () => {
		this.setState({
			showLinks: this.state.showLinks ? false : true,
			showHome: false,
			showAbout: false,
			showProjects: false
		})

	}

	toggleShowAbout = () => {
    this.setState({
			showAbout: this.state.showAbout ? false : true,
			showHome: false,
			showLinks: false,
			showProjects: false
		})
	}

	 toggleShowProjects = () => {
		 this.setState({
			 showProjects: this.state.showProjects ? false : true,
			 showHome: false,
			 showLinks: false,
			 showAbout: false
		 })
	 }


	render() {
		return (
<>
    <div><Top /></div>
			<div className="background main-layout">


		<div>
      {this.state.showHome  && <div className="main-display"><Home /></div>}

      {this.state.showLinks && <Links/>}

			{this.state.showAbout && <div><About /></div>}

			{this.state.showProjects && <div><Projects /></div>}
		</div>


      <div className="buttons">
        <Sidebar
					 toggleShowLinks={this.toggleShowLinks} toggleShowAbout={this.toggleShowAbout} toggleShowHome={this.toggleShowHome}
					 toggleShowProjects={this.toggleShowProjects}/>
      </div>
    </div>
</>
		)
	}
}




export default App;
