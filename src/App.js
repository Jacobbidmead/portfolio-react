import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'


class App extends React.Component {
	state = {
		showAllLinks: false,
		showAllAbout: false
	}

	showLinks = () => {
		this.setState({
			showAllLinks: true
		})
	}

	showAbout = () => {
    this.setState({
			showAllAbout: true
		})
	}

	

	render() {
		return (
			<div className="background main-layout">
			<>
				{this.state.showAllLinks ? <div className="main-display">
					 <Links/>
				 </div> : <><div className="main-display"><h1 className="main-page">Web Developer&</h1><div><h1 className="main-page">Designer&</h1></div><div><h1 className="main-page">Photographer.</h1></div></div></>}

			</>
      <div className="">
       <Sidebar showLinks={this.showLinks}/>
      </div>
    </div>
		)
	}
}




export default App;
