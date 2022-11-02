import React from 'react'
import '../styles/Photos.css'
import saImageData from '../imageData/saImageData'
import asiaImageData from '../imageData/asiaImageData'


class Photo extends React.Component {

state = {
	largePhoto: "images/sa/train.png",
	allImages: saImageData
}

changePic = (el) => {
	this.setState({
		largePhoto: el
	})
}

changeToAsia = () => {
	this.setState({
		largePhoto: "images/asia/umbrella.png",
		allImages: asiaImageData
	})
}

changeToSa = () => {
	this.setState({
		largePhoto: "images/sa/train.png",
		allImages: saImageData
	})
}


	render() {
		return (
		<>
		<div className="photo-nav">
			 <span onClick={e => this.changeToAsia(e)} className="change-photos far-east">Far East</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos sa">South America</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos sa">Europe</span>
			 <span onClick={e => this.changeToSa(e)} className="change-photos sa">People</span>
		</div>
			<div className="container">
				<div className="photo-container">
				 {this.state.allImages.map((el, i) => <div key={i} onClick={e => this.changePic(el)} className="photo-div">
						<img src={el} alt="" className="photo"/>
				 </div>)}
			</div>
				<div className="large-photo-container">
					<img className="main-photo" src={this.state.largePhoto} alt="" />
					<div>Description of images</div>
				</div>
			</div>
		</>
		)
	}
}

export default Photo
