import React from 'react'
import '../styles/About.css'

class About extends React.Component {
	render() {
		return (
		<>
			<div className="about-container">
			  <div className="about">About.</div>
				 <div className="about-text">
               <span className="about-paragraph">
	 							 Hi, I'm a Web Developer, Designer and Photographer based in London.
								 </span>

                <p><span className="about-paragraph">
	 							Ive recently completed Tortuga Coders 11 week fullstack coding bootcamp in Koh Phangan - Thailand, where I gained experience of JavaScript, HTML, CSS, Node.js & React, amoung other languages and frameworks </span></p>

                 <span className="about-paragraph">
	 							 Im currently looking for a junior position as Web Developer, whilst working on a number of personal and freelance projects that can be viewed in the projects section of this site and on my GitHub repository.
       	 				 </span>

									<span className="about-paragraph">
	 								Im currently using React to create my projects and am looking for a position where I can gain further knowledge of React and further my JavaScript skills.
									</span>
								  <span className="about-paragraph">
	 							 A passionate photographer, Ive documentend my travels in South
								 America, the USA, Asia & Australia over the last 8 years.
								 </span>

         </div>

			</div>
		</>
		)
	}
}

export default About
