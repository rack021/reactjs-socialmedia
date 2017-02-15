import React from 'react';
import { Link } from 'react-router';
const headImage = require('../../img/img16.jpg');

class RegisterPage extends React.Component {
	render() {
		let divStyle = {
			backgroundImage: 'url(' + headImage + ')'
		};
		return (
			<section className="section-account">
				<div className="img-backdrop" style={divStyle}></div>
				<div className="spacer"></div>
				<div className="card contain-sm style-transparent">
					<div className="card-body">
						<div className="row">
							<div className="col-sm-6">
								<br />
								<span className="text-lg text-bold text-primary">SIGN UP</span>
								<br /><br />
								<form className="form floating-label">
									<div className="form-group">
										<input type="text" className="form-control" id="username" name="username" />
										<label htmlFor="username">Username</label>
									</div>``
									<div className="form-group">
										<input type="password" className="form-control" id="password" name="password" />
										<label htmlFor="password">Password</label>
									</div>
									<div className="form-group">
										<input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
										<label htmlFor="confirmPassword">ConfirmPassword</label>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" id="password" name="email" />
										<label htmlFor="email">Email</label>
									</div>
									<br />
									<div className="row">
										<div className="col-xs-6 text-left">
											<div className="checkbox checkbox-inline checkbox-styled">
												<label>
													<input type="checkbox" /> <span>Remember me</span>
												</label>
											</div>
										</div>
										<div className="col-xs-6 text-right">
											<button className="btn btn-primary btn-raised" type="submit">Login</button>
										</div>
									</div>
								</form>
							</div>
							<div className="col-sm-5 col-sm-offset-1 text-center">
								<br /><br />
								<h3 className="text-light">
									already got a account?
								</h3>
								<Link className="btn btn-block btn-raised btn-primary" to="/">Sign-in here</Link>
							</div>
						</div>
					</div>
				</div >
			</section >
		);
	}
}
export default RegisterPage;
