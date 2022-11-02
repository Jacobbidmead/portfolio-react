import React from 'react'
import '../styles/Photos.css'
import imageData from '../imageData'


class Photo extends React.Component {



state = {
	largePhoto: "images/train.png",
	allImages: imageData
}

changePic = (el) => {
	this.setState({
		largePhoto: el
	})
}

	render() {
		return (
			<>
			<div className="container">
				<div className="photo-container">

				 {this.state.allImages.map((el, i) => <div onClick={e => this.changePic(el)} className="photo-div">
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
