import { useEffect, useState } from "react";

export const Box = () => {
	const [color, setColor] = useState("cornflowerblue");

	const changeColor = () => {
		setColor("tomato");
	};

	useEffect(() => {
		setTimeout(changeColor, 2000);
	}, []);

	return (
		<div
			className="w-[100px] h-[100px]"
			style={{ backgroundColor: color }}
		></div>
	);
};