import { useEffect, useState } from "react";

export const CustomTitle = () => {
	const [clicks, setClicks] = useState(0);

	const increment = () => {
		setClicks(clicks + 1);
	};

	useEffect(() => {
		document.title = `Kliknięto ${clicks} razy`;
	}, [clicks]);

	return (
		<div className="flex flex-col items-center gap-8">
			<p
				className="font-semibold p-2 bg-orange-600 hover:bg-orange-500 active:bg-orange-400 cursor-pointer select-none"
				style={{
					fontSize: `${clicks * 1.2}rem`,
				}}
				onClick={increment}
			>
				Kliknięto mnie już {clicks} razy
			</p>
		</div>
	);
};