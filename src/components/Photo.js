import React from 'react'
import '../styles/Photos.css'
import {imageData} from '../imageData.js'

class Photo extends React.Component {

state = {
	largePhoto: "images/train.png"
}

imgClicked = ["images/dance.png", "images/parade.png", "images/horse.png", "images/trumpet.png", "images/seller.png", "images/oruru.png", "images/train.png"]



changePic = (e) => {
	this.setState({
		largePhoto: "images/dance.png",
	})
}



	render() {
		return (
			<>
			<div className="container">
				<div className="photo-container">
					<div className="photo-div">
						 <img src="images/geezer.png" alt="" className="photo" onClick={e => this.changePic(e)}/>
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
						 <img src="images/train.png" alt="" className="photo"/>
					</div>
				</div>

					<div className="large-photo-container">
							<img className="main-photo" src={this.state.largePhoto} alt="" />
					</div>

			</div>
			</>
		)
	}
}

export default Photo
