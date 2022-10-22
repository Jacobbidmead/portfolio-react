import React from 'react'
import '../styles/Links.css'



class Links extends React.Component {
	render() {
		return (
			<div>
			  <span className="links"> <div></div>Email://<div>jacob.bidmead.fullstack"outlook.com</div>
				</span>
			<div>
			  <span className="links">GitHub:// <a href="https://github.com/Jacobbidmead" className="gitlink">github.com/Jacobbidmead</a>
			  </span>
			</div>
		</div>
		)
	}
}

export default Links
