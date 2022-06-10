import React from "react";
import '../../pages/pagesCSS/Footer.css';

function Footer() {
	return (
	<div className="main-footer">
		<div className="footer-middle">
			<div className="container">
				<div className="row">
					{/*Column1*/}
					<div className="col-md-3 col-sm-6">
						<h4>Michael Letanosky</h4>
						<ul className="list-unstyled">
							<li><a href="https://github.com/MichaelMLetanosky">GitHub</a></li>
							<li><a href="">LinkdIn</a></li>
							<li><a href="mailto: MichaelMLetanosky@gmail.com">Email</a></li>
						</ul>	
					</div>
					{/*Column2*/}
					<div className="col-md-3 col-sm-6">
						<h4>Jesse Maun</h4>
						<ul className="list-unstyled">
							<li><a href='https://github.com/Jmaun22'>GitHub</a></li>
							<li><a href='https://www.linkedin.com/in/jesse-maun-ab2a11160'>LinkdIn</a></li>
							<li><a href='mailto:jessemaun21@gmail.com'>Email</a></li>
						</ul>	
					</div>
					{/*Column3*/}
					<div className="col-md-3 col-sm-6">
						<h4>Michael Sands</h4>
						<ul className="list-unstyled">
							<li><a href='https://github.com/Msands21'>GitHub</a></li>
							<li><a href='https://www.linkedin.com/in/michael-sands-464786198/'>LinkdIn</a></li>
							<li><a href='mailto:mikesands94@gmail.com'>Email</a></li>
						</ul>	
					</div>
					{/*Column4*/}
					<div className="col-md-3 col-sm-6">
						<h4>Christopher Halchak</h4>
						<ul className="list-unstyled">
							<li><a href='https://github.com/MiniHalchak'>GitHub</a></li>
							<li><a href='Masterchris13324@gmail.com'>LinkdIn</a></li>
							<li><a href='mailto:'>Email</a></li>
						</ul>	
					</div>
				</div>
				{/* Footer Bottom */}
				<div className="footer-bottom">
					<p className="text-xs-center">&copy; {new Date().getFullYear()} At Your Doorstep. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Footer;
