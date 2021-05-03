import React, { useState } from "react";
import "../../styles/home.scss";
export function Home() {
	const [state, setState] = useState(null);

	let redExtraclass = "";
	if (state == "red") {
		redExtraclass = "selected";
	}
	let yellowExtraclass = "";
	if (state == "yellow") {
		yellowExtraclass = "selected";
	}
	let greenExtraclass = "";
	if (state == "green") {
		greenExtraclass = "selected";
	}

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<div
					className={"red light " + redExtraclass}
					onClick={() => setState("red")}></div>
				<div
					className={"yellow light " + yellowExtraclass}
					onClick={() => setState("yellow")}></div>
				<div
					className={"green light " + greenExtraclass}
					onClick={() => setState("green")}></div>
			</div>
		</div>
	);
}
