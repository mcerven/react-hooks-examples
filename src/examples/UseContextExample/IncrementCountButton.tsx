import { useCountContext } from "./CountContext";

export default function IncrementCountButton() {
  const { increment } = useCountContext();

  return (
    <button style={{width: '2.5rem'}} onClick={increment}>+</button>
  );
}
