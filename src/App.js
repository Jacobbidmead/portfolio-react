import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Links from './components/Links.js'


class App extends React.Component {
	state = {
		showAllLinks: false
	}

	showLinks = () => {
		console.log('showing links')
		this.setState({
			showAllLinks: true
		})
	}

	render() {
		return (
			<div className="background main-layout">
			<>
				{this.state.showAllLinks ? <div className="main-display">
					 <Links/>
				 </div> : <div>Hello world</div>}

			</>
      <div className="">
       <Sidebar showLinks={this.showLinks}/>
      </div>
    </div>
		)
	}
}




export default App;
