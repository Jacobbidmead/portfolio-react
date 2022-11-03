import React from 'react'
import '../styles/Photos.css'
import saImageData from '../imageData/saImageData'
import asiaImageData from '../imageData/asiaImageData'

let saDescription = "South & Central America: September 2017 - March 2018. Countries exhibited: Peru, Bolivia, Colombia & Mexico "
let asiaDescription = "Japan, Vietnam & South Korea: September - November 2019"

class Photo extends React.Component {

state = {
	largePhoto: "images/sa/train.png",
	allImages: saImageData,
	imgDescription: saDescription
}

changePic = (el) => {
	this.setState({
		largePhoto: el
	})
}

changeToAsia = () => {
	this.setState({
		largePhoto: "images/asia/umbrella.png",
		allImages: asiaImageData,
		imgDescription: asiaDescription
	})
}

changeToSa = () => {
	this.setState({
		largePhoto: "images/sa/train.png",
		allImages: saImageData,
		imgDescription: saDescription
	})
}


	render() {
		return (
		<>
		<div className="photo-nav">
			 <span onClick={e => this.changeToAsia(e)} className="change-photos">Far East</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos">South America</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos">Europe</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos">Oceania</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos">London</span>
		</div>
			<div className="container">
				<div className="photo-container">
				 {this.state.allImages.map((el, i) => <div key={i} onClick={e => this.changePic(el)} className="photo-div">
						<img src={el} alt="" className="photo"/>
				 </div>)}
			</div>
				<div className="large-photo-container">
					<img className="main-photo" src={this.state.largePhoto} alt="" />
					<div className="img-description">{this.state.imgDescription}</div>
				</div>
			</div>
		</>
		)
	}
}

export default Photo
