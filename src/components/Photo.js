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

changeImages = () => {
	this.setState({
		allImages: asiaImageData
	})
}

	render() {
		return (
		<>
		<div><button onClick={e => this.changeImages(e)}>Asia</button></div>
			<div className="container">
				<div className="photo-container">
				 {this.state.allImages.map((el, i) => <div key={i} onClick={e => this.changePic(el)} className="photo-div">
						<img src={el} alt="" className="photo"/>
				 </div>)}
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
