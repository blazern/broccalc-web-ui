import { action, observable } from "mobx";

import User from "./User";

export default class Application {
	@observable loaded = false

	@observable user

	constructor() {
		this.user = new User(this);
	}

	@action
	async load() {
		await this.user.load();

		this.loaded = true;
	}
}
