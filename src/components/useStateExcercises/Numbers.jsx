import { useState } from "react";

export const Numbers = () => {
	const ALL_NUMBERS = [
		54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40,
	];

	const [numbers, setNumbers] = useState(ALL_NUMBERS);

	const setEven = () => {
		setNumbers(ALL_NUMBERS.filter((number) => number % 2 === 0));
	};

	const setOdd = () => {
		setNumbers(ALL_NUMBERS.filter((number) => number % 2 !== 0));
	};

	const setAll = () => {
		setNumbers([...ALL_NUMBERS]);
	};

	return (
		<div className="flex flex-col items-center gap-8">
			<ul className="flex gap-3">
				{numbers.map((number) => (
					<li>{number}</li>
				))}
			</ul>
			<div className="flex gap-5">
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={setEven}>Pokaż parzyste</button>
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={setOdd}>Pokaż nieparzyste</button>
				<button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={setAll}>Pokaż wszystkie</button>
			</div>
		</div>
	);
};
