import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Top from './components/Top.js'
import Projects from './components/Projects.js'
import Photos from './components/Photos.js'


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
			showHome: true
		})
	}


	toggleShowLinks = () => {
		this.setState({
			showLinks: this.state.showLinks ? false : true,
			showHome: false,
			showAbout: false,
			showProjects: false,
			showPhotos: false
		})

	}

	toggleShowAbout = () => {
    this.setState({
			showAbout: this.state.showAbout ? false : true,
			showHome: false,
			showLinks: false,
			showProjects: false,
			showPhotos: false
		})
	}

	 toggleShowProjects = () => {
		 this.setState({
			 showProjects: this.state.showProjects ? false : true,
			 showHome: false,
			 showLinks: false,
			 showAbout: false,
			 showPhotos: false
		 })
	 }

	 toggleShowPhotos = () => {
		 this.setState({
			 showPhotos: this.state.showPhotos ? false : true,
			 showHome: false,
			 showLinks: false,
			 showAbout: false,
			 showProjects: false
		 })
	 }


	render() {
		return (
<>
  <div className="background-main">
    <div><Top/></div>
			<div className="main-layout">



      {this.state.showHome  && <div className="main-display"><Home /></div>}

      {this.state.showLinks && <Links/>}

			{this.state.showAbout && <About />}

			{this.state.showProjects && <div><Projects /></div>}

			{this.state.showPhotos && <Photos />}



      <div className="buttons">
        <Sidebar
					 toggleShowLinks={this.toggleShowLinks} toggleShowAbout={this.toggleShowAbout} toggleShowHome={this.toggleShowHome}
					 toggleShowProjects={this.toggleShowProjects}
					 toggleShowPhotos={this.toggleShowPhotos}/>
      </div>
    </div>
	</div>
</>
		)
	}
}




export default App;
