
import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar.js'
import Display from './components/Display.js'

class App extends React.Component {
	render() {
		return (
			<div className="background main-layout">
       <Display />
      <div className="">
       <Sidebar />
      </div>
    </div>
		)
	}
}




export default App;
