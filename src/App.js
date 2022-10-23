import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'
import About from './components/About.js'
import Home from './components/Home.js'


class App extends React.Component {
	state = {
		showAllLinks: false,
		showAllAbout: false
	}

	showLinks = () => {
		this.setState({
			showAllLinks: this.state.showAllLinks ? false : true
		})

	}

	showAbout = () => {
    this.setState({
			showAllAbout: this.state.showAllAbout ? false : true
		})
	}



	render() {
		return (
			<div className="background main-layout">

<div>
         {this.state.showAllLinks ?
       <div className="main-display">
					 <Links/>
			 </div> : <Home />}

			 {this.state.showAllAbout ? <About /> : <Home />}

</div>


      <div className="">
       <Sidebar showLinks={this.showLinks} showAbout={this.showAbout}/>
      </div>


    </div>
		)
	}
}




export default App;
