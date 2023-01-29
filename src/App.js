import "./App.css";
import { UseEffectExcercises } from "./components/UseEffectExcercises";
import { UseStateExcercises } from "./components/UseStateExcercises";

function App() {
	return (
		<div className="flex flex-col text-center gap-24 p-12 bg-gray-700 text-gray-200 min-h-screen">
			<UseStateExcercises />
      <UseEffectExcercises />
		</div>
	);
}

export default App;
