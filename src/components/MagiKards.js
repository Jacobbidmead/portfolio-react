import React from 'react'

class MagiKards extends React.Component {
	render() {
		return (
	<>
		<div className="Mcards-container">
			<div className="content-container">
			<h2 className="text">MagiKards</h2>
				 <img src="./images/project-img/MK1.png" className="img-container" alt=""/>
			</div>

			<div className="content-container text-container">
					<p className="text"> Magikards is a fantasy based battle card game created by myself and class mates Joshua Peoples & Mohammed Hammuri during the final two weeks of Tortuga Coders bootcamp. The concept was top create a game using React that would take two class of cards, each with unique attributes, that would affect one another, with the strongest removing health from the other user.
					</p>
			</div>

			<div className="content-container text-container">
				<p className="text">
				The view above is the home screen; players are able to select either ICe or Fire, then enter thier name into the input above. This allows the start of the game.
				</p>
			</div>

		 <div className="content-container">
			<img src="./images/project-img/MK3.png" className="img-container" alt=""/>
		 </div>

		 <div className="content-container"><img src="./images/project-img/MK4.png" className="img-container alt=" /></div>

		 <div className="content-container"><img src="./images/project-img/MK2.png"  className="img-container alt=" /></div>
	</div>
</>
		)
	}
}

export default MagiKards
