import { useState } from "react";

export const Counter = () => {
  const DEFAULT_COUNT = 10;

	const [count, setCount] = useState(DEFAULT_COUNT);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(DEFAULT_COUNT);
  };

	return (
		<div className="flex flex-col items-center gap-8">
			<h2 className="text-2xl font-semibold tracking-wider">Liczba kliknięć {count}</h2>
      <div className="flex justify-between w-48">
        <button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={increment}>+</button>
        <button className="font-bold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={decrement}>-</button>
        <button className="font-semibold px-2 h-8 bg-orange-600 hover:bg-orange-500 active:bg-orange-400" onClick={reset}>Reset</button>
      </div>
		</div>
	);
};
