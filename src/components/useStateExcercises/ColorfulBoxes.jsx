import { useState } from "react";

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

export const ColorfulBoxes = () => {
	const [boxes, setBoxes] = useState([]);

	const addBox = () => {
		setBoxes([...boxes, { color: getRandomColor() }]);
	};

	return (
		<div className="flex flex-col gap-2">
			<div>
				<div className="flex items-center gap-5 overflow-x-scroll box-border w-[1000px] min-h-[250px]">
					{boxes.map((box, index) => (
						<div
							className="w-[200px] h-[200px] min-w-[200px] min-h-[200px]"
							style={{ backgroundColor: box.color }}
						></div>
					))}
				</div>
			</div>
			<div>
				<button
					className="font-bold px-4 py-2 bg-orange-600 hover:bg-orange-500 active:bg-orange-400"
					onClick={addBox}
				>
					Dodaj boxa!
				</button>
			</div>
		</div>
	);
};
