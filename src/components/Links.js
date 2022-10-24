import React from 'react'
import '../styles/Links.css'



class Links extends React.Component {
	render() {
		return (
			<>
		 <div className="link-container">
			  <span className="links"> <i class="fa-solid fa-envelope"></i>
				Email://<div>jacob.bidmead.fullstack"outlook.com</div>
				</span>
			<div>

				  <span className="links"><i class="fa-brands fa-github"></i><span>://</span>


						<a href="https://github.com/Jacobbidmead" className="gitlink">github.com/Jacobbidmead</a>
				  </span>
			</div>
			<div>
				<span className="links">
				  <i class="fa-regular fa-user"></i>
				CV
				</span>

			</div>
		</div>
		</>
		)
	}
}

export default Links
