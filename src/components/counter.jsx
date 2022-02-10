import { useCounter } from "../store/slices/counterSlice"

export function Counter(){
  const count = useCounter("value")
  return <h1 className="w-full text-xl font-bold p-4 border-b-2 border-gray-300">Count: {count}</h1>
}