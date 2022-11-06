import React from 'react'


class AirBnB extends React.Component {
	render() {
		return (
<>

  	<button onClick={e => this.props.changeBackToProjects(e)}>More projects</button>
		<div className="airbnb-container">
			<div>
					<img src="./images/project-img/abnb1.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb2.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb3.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb4.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb5.png" className="img-container"alt="" />
			</div>
			<div>
					<img src="./images/project-img/abnb6.png" className="img-container"alt="" />
			</div>
		</div>
</>
		)
	}
}

export default AirBnB
