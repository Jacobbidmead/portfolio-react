import React from 'react'
import '../styles/Photos.css'

class Photos extends React.Component {
	render() {
		return (
		<>
			<div className="container">
			 <div className="quote-container">
				 <div className="quote1">
					 <h1 className="travel">Travel changes you.</h1>
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
					<div className="photo-quotes">
					  <span className="photo-quote">Over the last 10 years, I've been shooting street photography. Capturing moments from my life & travels; colors, lights and compositions.</span>
					<div className="photo-quotes">
						<span className="photo-quote">
						Most interesting to me thou, are the people I see and the lives they live.
						</span>
					</div>
			 </div>
			 <div className="photo-container">
				 <div className="photo-div">
				    <img src="images/geezer.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/dance.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/parade.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/horse.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/trumpet.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/seller.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/oruru.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/colbeach.png" alt="" className="photo"/>
				 </div>
				 <div className="photo-div">
				    <img src="images/train.png" alt="" className="photo"/>
				 </div>
			 </div>
			</div>
    </>
		)
	}
}

export default Photos
