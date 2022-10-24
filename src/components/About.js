import React from 'react'
import '../styles/About.css'

class About extends React.Component {
	render() {
		return (
			<div className="about-container">
			  <div>
					 <div className="about-text-bg">
							 <p>Hi, I'm a Web Developer, Designer and Photographer based in London.</p>
					 </div>
					 <div>
					  <img src="images/dancer.png" className="about-image"/>
					 </div>
					 <div className="about-text-bg">
							 <p>Im currently looking for a junior position as Web Developer,  please check out my <span className="underline">projects</span>, <span className="underline">GitHub repository</span>, and CV - located in the <span className="underline">links</span> section.</p>
						</div>
						<div className="about-text-bg">
							<p>
							Im passionate about Web Desin and would love a role where i could be involved in the design process; aswell as gaining more knowledge and skills with React & JavaScript.
              </p>
						</div>
						<div className="about-text-bg">
				       <p>Ive recently completed Tortuga Coders 11 week fullstack coding bootcamp in Koh Phangan - Thailand, where I gained experience of JavaScript, HTML, CSS, Node.js & React, amoung other languages and frameworks </p>
						</div>
						<div className="about-text-bg">
							 <p>
							 A passionate photographer, Ive documentend my travels in South America, the USA, Asia & Australia over the last 8 years
							 </p>
						</div>
						<div>
							 <p>


							 </p>
					</div>
        </div>
			</div>
		)
	}
}

export default About
