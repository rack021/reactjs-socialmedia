import React from "react";
import { Link } from "react-router";
import LoginForm from "./LoginForm";
const headImage = require("../../img/img16.jpg");

export default class LoginPage extends React.Component {
	render() {
		let divStyle = {
			backgroundImage: "url(" + headImage + ")"
		};

		return (
			<section className="section-account">
				<div className="img-backdrop" style={divStyle} />
				<div className="spacer" />
				<div className="card contain-sm style-transparent">
					<div className="card-body">
						<div className="row">
							<div className="col-sm-6">
								<br />
								<span className="text-lg text-bold text-primary">
									VERSAILLES COURTIER
                </span>
								<br /><br />
								<LoginForm />
							</div>
							<div className="col-sm-5 col-sm-offset-1 text-center">
								<br /><br />
								<h3 className="text-light">
									No account yet?
                </h3>
								<Link className="btn btn-block btn-raised btn-primary" to="register">
									Sign up here
                </Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
