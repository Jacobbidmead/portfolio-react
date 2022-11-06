import React from 'react'
import '../styles/About.css'
import Sidebar from './Sidebar'

class About extends React.Component {
	render() {
		return (
		<>
			<Sidebar />
			<div className="about-container">
				<div>
					 <h1 className="welcome">Welcome.</h1>
						 <h3 className="my-website">to my website.</h3>
						 <div className="color-block"><h3>About me.</h3></div>
				   <div className="about-bg">

							<div className="about-text-bg about1">
	 							 <p>Hi, I'm a Web Developer, Designer and Photographer based in London.</p>
	 					 </div>
	 					 <div className="about-text-bg about2">
	 							<p>Ive recently completed Tortuga Coders 11 week fullstack coding bootcamp in Koh Phangan - Thailand, where I gained experience of JavaScript, HTML, CSS, Node.js & React, amoung other languages and frameworks </p>
	 					 </div>
						   <img src="images/selfie.png" alt="" className="selfie"/>
	 					 <div className="about-text-bg about3">
	 							 <p>Im currently looking for a junior position as Web Developer, whilst working on a number of personal projects that can be viewed in the <span className="underline">projects</span> section and on my <span className="underline">GitHub </span>repository. </p>
	 						</div>
	 						<div className="about-text-bg about4">
	 							<p>
	 								Im currently using React to create my projects and am looking for a position where I can gain further knowledge of React and further my JavaScript skills.
	               </p>
	 						</div>
	 						<div className="about-text-bg">
	 							 <p>
	 							 A passionate photographer, Ive documentend my travels in South America, the USA, Asia & Australia over the last 8 years.
	 							 </p>
	 						</div>
						<div>
						</div>
				   </div>
				</div>
			</div>
		</>
		)
	}
}

export default About
