import { useState } from "react";

export const UpperLower = () => {
	const [upper, setUpper] = useState(false);

	const makeUpper = () => {
		setUpper(true);
	};

	const makeLower = () => {
		setUpper(false);
	};

	return (
		<div className="flex flex-col items-center gap-8">
			<h2
				className={`text-2xl font-semibold tracking-widest ${
					upper ? "uppercase" : "lowercase"
				}`}
			>
				Hello :)
			</h2>
			<div className="flex gap-4">
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={makeUpper}>Uppercase</button>
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={makeLower}>Lowercase</button>
			</div>
		</div>
	);
};
