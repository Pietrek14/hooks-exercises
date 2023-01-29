import { Box } from "./useEffectExcercises/Box";
import { CustomTitle } from "./useEffectExcercises/CustomTitle";
import { Stopwatch } from "./useEffectExcercises/Stopwatch";

export const UseEffectExcercises = () => {
	return (
		<div className="flex flex-col items-start gap-24">
			<h1 className="text-5xl tracking-widest">useEffect()</h1>
			<div className="flex flex-col items-center text-center gap-24 w-full">
				<div className="flex flex-col items-center gap-12">
					<h1 className="text-4xl">Zadanie 1.</h1>
					<Box />
				</div>
				<div className="flex flex-col items-center gap-12">
					<h1 className="text-4xl">Zadanie 2.</h1>
					<CustomTitle />
				</div>
				<div className="flex flex-col items-center gap-12">
					<h1 className="text-4xl">Zadanie 3.</h1>
					<Stopwatch />
				</div>
			</div>
		</div>
	);
}