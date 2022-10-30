import React from 'react'
import '../styles/Photos.css'

class Photos extends React.Component {
	render() {
		return (
		<>
			<div className="container">
			 <div className="quote-container">
				 <div className="quote1">
					 <h1>Travel changes you.</h1>
				 </div>
				 <div className="quote2">
					 <span>
					  As you move through this life and this world you change things slightly,
					 </span>
				 </div>
				 <div className="quote3">
					 <span>
					 you leave marks behind, however small.
					 </span>
				 </div>
				 <div className="quote4">
					 <span>
					 And in return, life — and travel — leaves marks on you.
					 </span>
				 </div>
				 <div className="quote5">
					<span>
					- Anthony Bourdain
					</span>
				</div>
			</div>
			 <div className="photo-container">
				 <div>
				    <img src="images/geezer.png" alt="" className="photo1"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo2"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo3"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo4"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo5"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo6"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo7"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo8"/>
				 </div>
				 <div>
				    <img src="" alt="" className="photo9"/>
				 </div>
			 </div>
			</div>
    </>
		)
	}
}

export default Photos
