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
	 							 Hi. I'm a <b>Web Developer, Designer and Photographer</b> based in London.
								 </span>

                <p><span className="about-paragraph">
	 							Ive recently completed Tortuga Coders 11 week fullstack coding bootcamp in Koh Phangan - Thailand, where I gained experience of <b>JavaScript, HTML, CSS, Node.js & React</b>, amoung other languages, frameworks and libarys. </span></p>

                 <span className="about-paragraph">
	 							 Im currently looking for a junior position as Web Developer, whilst working on a number of personal and freelance projects that can be viewed in the projects section of this site and on my GitHub repository.  </span>



									<span className="about-paragraph">
	 								<b>I build my projects using React</b>; and am looking for a position where I can gain advanced skills using the libary and further my JavaScript knowledge.  </span>
								  <span className="about-paragraph">
	 							     A passionate photographer, Ive documentend my travels in South
								  America, the USA, Asia, Europe & Australia over the last 8 years.
								 </span>


         </div>

			</div>
		</>
		)
	}
}

export default About
