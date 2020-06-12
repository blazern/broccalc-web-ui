import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Application extends React.Component {
	@observable password = "";

	get application() {
		return this.props.application;
	}

	renderInputCode() {
		return (
			<div>
				<input value={this.password} onChange={this.onPasswordChange.bind(this)} />
				<button onClick={this.onAuthClick.bind(this)}>OK</button>
			</div>
		);
	}

	@action
	onPasswordChange(event) {
		this.password = event.target.value;
	}

	onAuthClick() {
		this.application.user.authorize(this.password);
	}

	render() {
		if (!this.application.loaded) return null;

		return (
			this.application.user.isAuthorized
				? <div>Authorized</div>
				: this.renderInputCode()
		);
	}
}

export default Application;
