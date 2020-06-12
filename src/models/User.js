import axios from "axios";
import { action, observable } from "mobx";

export default class User {
	application;

	@observable token;

	constructor(application) {
		this.application = application;
	}

	get isAuthorized() {
		return Boolean(this.token);
	}

	@action
	async load() {
		this.token = localStorage.getItem("token");
	}

	async authorize(telegramCode) {
		const resp = await axios.post("https://jdam.space/api/auth/login", telegramCode, {
			headers: { "content-type": "text/plain" }
		});

		this.token = resp.data.token;
		if (this.isAuthorized) {
			localStorage.setItem("token", this.token);
		}
	}
}
