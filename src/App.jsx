import { useState } from "react";
import { useDispatch } from "react-redux";
import { Counter } from "./components/counter";
import {
  decrement,
  increment,
  incrementByAmount,
  useCounter,
} from "./store/slices/counterSlice";
function App() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  console.log(amount, useCounter("value"));
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <Counter />
      <button
        className="p-4 font-bold text-white bg-blue-700  rounded"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Somar
      </button>
      <button
        className="p-4 font-bold text-white bg-blue-700  rounded"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Subtrair
      </button>
      <input
        type="number"
        className="w-full p-2 rounded-lg text-lg border-2 border-gray-400"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="p-4 font-bold text-white bg-blue-700 rounded"
        onClick={() => {
          dispatch(incrementByAmount(Number(amount) || 0));
        }}
      >
        Somar com valor
      </button>
    </div>
  );
}

export default App;
