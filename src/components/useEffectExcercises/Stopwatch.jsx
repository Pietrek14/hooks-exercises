import { useEffect, useState } from "react";

export const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [laps, setLaps] = useState([]);
	const [isRunning, setIsRunning] = useState(true);

	const start = () => {
		setIsRunning(true);
	};

	const stop = () => {
		setIsRunning(false);
	};

	const reset = () => {
		setTime(0);
		setLaps([]);
		stop();
	};

	const lap = () => {
		setLaps([...laps, time]);
	};

	useEffect(() => {
		let interval;

		console.log(isRunning);

		if (isRunning) {
			interval = setInterval(() => {
				setTime((time) => time + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}

    return () => clearInterval(interval);
	}, [isRunning]);

	return (
		<div className="flex flex-col items-center gap-8">
			<h1 className="text-5xl tracking-widest">Time: {time}s</h1>
			<div className="flex gap-4">
				<button
					className="font-semibold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400"
					onClick={start}
				>
					Start
				</button>
				<button
					className="font-semibold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400"
					onClick={stop}
				>
					Stop
				</button>
				<button
					className="font-semibold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="font-semibold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400"
					onClick={lap}
				>
					Lap
				</button>
			</div>
			<ul className="flex flex-col items-center gap-4">
				{laps.map((lap, index) => (
					<li key={index} className="tracking-wider">
						Lap: {lap}s
					</li>
				))}
			</ul>
		</div>
	);
};
