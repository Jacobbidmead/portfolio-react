import React from 'react'
import '../styles/Photos.css'

class Photo extends React.Component {
	render() {
		return (
			<>
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
			</>
		)
	}
}

export default Photo
