import React from 'react'
import Photo from './Photo.js'
import '../styles/Photos.css'

class Photos extends React.Component {
	render() {
		return (
		<>
			<div>
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
             I attempt to descrive my love of anthropology & discovering new cultures throughout my work.
						</span>
					</div>
			 </div>
			 <Photo changePic={this.props.changePic} />
			</div>
    </>
		)
	}
}

export default Photos
