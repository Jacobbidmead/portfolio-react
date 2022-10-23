import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'
import About from './components/About.js'
import Home from './components/Home.js'


class App extends React.Component {
	state = {
		showHome: true,
		showLinks: false,
		showAbout: false
	}

	toggleShowHome = () => {
		this.setState({
			showHome: false
		})
	}

	toggleShowLinks = () => {
		this.setState({
			showLinks: this.state.showLinks ? false : true
		})

	}

	toggleShowAbout = () => {
    this.setState({
			showAbout: this.state.showAbout ? false : true
		})
	}



	render() {
		return (
			<div className="background main-layout">

<div>
       {this.showHome ? <Home />}

         {this.state.showLinks &&
       <div className="main-display">
					 <Links/>
			 </div>}



			 {this.state.showAbout && <About />}

</div>


      <div className="">
       <Sidebar toggleShowLinks={this.toggleShowLinks} toggleShowAbout={this.toggleShowAbout}/>
      </div>


    </div>
		)
	}
}




export default App;
