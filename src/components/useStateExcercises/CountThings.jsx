import { useState } from "react";

export const CountThings = () => {
	const [accountState, setAccountState] = useState(1000);
	const [age, setAge] = useState(18);

	const getRicher = () => {
		setAccountState(accountState + 1000);
	}

	const getOlder = () => {
		setAge(age + 1);
	}

	return (
		<div className="flex flex-col items-center gap-8">
			<div className="flex flex-col items-center gap-4">
				<p>💰 so much money: {accountState}</p>
				<p>Age: {age}</p>
			</div>
			<div className="flex gap-4">
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={getRicher}>Get richer!</button>
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={getOlder}>Get older :(</button>
			</div>
		</div>
	);
};