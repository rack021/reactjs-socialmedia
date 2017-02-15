import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		return (
			<div className="checkbox checkbox-inline checkbox-styled">
				<label>
					<input type="checkbox" /> <span>{this.props.label}</span>
				</label>
			</div>
		);
	}
}
Checkbox.propTypes = {
	label: React.PropTypes.string
};

export default Checkbox;
