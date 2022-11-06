import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Top from './components/Top.js'
import Projects from './components/Projects.js'
import Photos from './components/Photos.js'
import AirBnB from './components/Projects/AirBnB.js'



class App extends React.Component {
	state = {
		showHome: true,
		showLinks: false,
		showAbout: false,
		showPhotos: false,
		showProjects: false,
		showAirBnb: false
	}

	toggleShowHome = () => {
		this.setState({
			showHome: true,
			showLinks: false,
			showAbout: false,
			showPhotos: false,
			showProjects: false,
			showAirBnb: false
		})
	}


	toggleShowLinks = () => {
		this.setState({
			showLinks: true,
			showHome: false,
			showAbout: false,
			showProjects: false,
			showPhotos: false
		})

	}

	toggleShowAbout = () => {
    this.setState({
			showAbout: true,
			showHome: false,
			showLinks: false,
			showProjects: false,
			showPhotos: false
		})
	}

	 toggleShowProjects = () => {
		 this.setState({
			 showProjects: true,
			 showHome: false,
			 showLinks: false,
			 showAbout: false,
			 showPhotos: false
		 })
	 }

	 toggleShowPhotos = () => {
		 this.setState({
			 showPhotos: true,
			 showHome: false,
			 showLinks: false,
			 showAbout: false,
			 showProjects: false
		 })
	 }

	 changeBackToProjects = () => {
		 this.setState({
			 showProjects: true,
			 showAirbnb: false
		 })
	 }


  toggleShowAirBnb = (e) => {
			this.setState({
				showProjects: false,
				showAirBnb: true
			})
	}


	render() {
		return (
<>
 <div className="background-main">
   <div>
		<div className="top-bar">
		 <Sidebar
				 toggleShowLinks={this.toggleShowLinks} toggleShowAbout={this.toggleShowAbout} toggleShowHome={this.toggleShowHome}
				 toggleShowProjects={this.toggleShowProjects}
				 toggleShowPhotos={this.toggleShowPhotos}/>
			 <Top toggleShowHome={this.toggleShowHome}/>
		</div>
 </div>
 <div className="main-layout">
      {this.state.showHome  && <div className="main-display"><Home /></div>}

      {this.state.showLinks && <Links/>}

			{this.state.showAbout && <About />}

			{this.state.showProjects && <div><Projects
			toggleShowAirBnb={this.toggleShowAirBnb} changeBackToProjects={this.changeBackToProjects}/></div>}

			{this.state.showAirBnb ? <AirBnB/> : null}


			{this.state.showPhotos && <Photos />}
    </div>
	</div>
</>
		)
	}
}




export default App;
