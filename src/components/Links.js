import React from 'react'
import '../styles/Links.css'



class Links extends React.Component {
	render() {
		return (
			<>
		 <div className="link-container">
		  <h1 className="contact-me">Contact Me.</h1>
			  <span className="links">
				   <i className="fa-solid fa-envelope"></i>jacob.bidmead.fullstack"outlook.com
				</span>

				<span className="links">
					<i className="fa-regular fa-user"></i>
				CV
				</span>

				  <span className="links"><i className="fa-brands fa-github"></i><span>://</span>
						<a href="https://github.com/Jacobbidmead" className="gitlink" target="_blank" rel="noreferrer">github.com/Jacobbidmead</a>
				  </span>
     <div><img src="images/selfie.png" alt="" className="selfie"/></div>



		</div>
		</>
		)
	}
}

export default Links
