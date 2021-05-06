import React, { useState } from "react";
import { Pick } from "./pick";
import { Home } from "./home";

const select = () => {
	const [inicio, setInicio] = useState(false);

	// const cambiarAHome = () => {
	// 	setScreen(<Home />);
	// };

	return (
		<div>
			{!inicio ? <Pick /> : <Home />}
			<div className="form-row">
				<div className="form-group col-6 d-flex justify-content-center">
					<button
						onClick={() => {
							setInicio(true);
						}}
						className="btn btn-dark m-auto"
						style={{ width: "100px", height: "100px" }}>
						X
					</button>
				</div>
				<div className="form-group col-6 d-flex justify-content-center">
					<button
						onClick={() => {
							setInicio(true);
						}}
						className="btn btn-dark m-auto"
						style={{ width: "100px", height: "100px" }}>
						O
					</button>
				</div>
			</div>
		</div>
	);
};

export default select;
