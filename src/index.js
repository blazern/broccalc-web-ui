import React from "react";
import { render } from "react-dom";

import "./styles";

import ApplicationModel from "models/Application";
import Application from "components/Application";

const application = new ApplicationModel();
application.load();

render(
	<Application application={application} />,
	document.getElementById("root")
);
