import { ColorfulBoxes } from "./useStateExcercises/ColorfulBoxes";
import { Counter } from "./useStateExcercises/Counter";
import { CountThings } from "./useStateExcercises/CountThings";
import { Numbers } from "./useStateExcercises/Numbers";
import { UpperLower } from "./useStateExcercises/UpperLower";
import { ToDoList } from "./useStateExcercises/ToDoList";

export const UseStateExcercises = () => {
	return (
		<div className="flex flex-col items-start gap-24">
			<h1 className="text-5xl tracking-widest">useState()</h1>
			<div className="flex flex-col items-center text-center gap-24 w-full">
				<div className="flex flex-col gap-12">
					<h1 className="text-4xl">Zadanie 1.</h1>
					<Counter />
				</div>
				<div className="flex flex-col gap-12">
					<h1 className="text-4xl">Zadanie 2.</h1>
					<ColorfulBoxes />
				</div>
				<div className="flex flex-col gap-12">
					<h1 className="text-4xl">Zadanie 3.</h1>
					<CountThings />
				</div>
				<div className="flex flex-col gap-12">
					<h1 className="text-4xl">Zadanie 4.</h1>
					<UpperLower />
				</div>
				<div className="flex flex-col gap-12">
					<h1 className="text-4xl">Zadanie 5.</h1>
					<Numbers />
				</div>
				<div className="flex flex-col gap-12">
					<h1 className="text-4xl">Zadanie 6.</h1>
					<ToDoList />
				</div>
			</div>
		</div>
	);
}