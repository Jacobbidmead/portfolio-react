import React from 'react'
import '../styles/Photos.css'
import {imageData} from '../imageData'


class Photo extends React.Component {

state = {
	largePhoto: "images/train.png"
}

imgClicked = ["images/dance.png", "images/parade.png", "images/horse.png", "images/trumpet.png", "images/seller.png", "images/oruru.png", "images/train.png", "images/geezer.png"]



changePic = (e) => {
	this.setState({
		largePhoto: this.imgClicked
	})
}

	render() {
		return (
			<>
			<div className="container">
				<div className="photo-container">
					<div className="photo-div">
						 <img src={this.imgClicked[0]} alt="" className="photo" onClick={e => this.changePic(e)}/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[1]} alt="" className="photo"/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[2]} alt="" className="photo"/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[3]} alt="" className="photo"/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[4]} alt="" className="photo"/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[5]} alt="" className="photo"/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[6]} alt="" className="photo"/>
					</div>
					<div className="photo-div">
						 <img src={this.imgClicked[7]} alt="" className="photo"/>
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
