import { CountContextProvider } from "./CountContext";
import IncrementCountButton from "./IncrementCountButton";
import CountDisplay from "./CountDisplay";

export default function UseContextExample() {
  return (
    <CountContextProvider>
      <CountDisplay />
      <IncrementCountButton />
    </CountContextProvider>
  )
}
