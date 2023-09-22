import { useCountContext } from "./CountContext";

export default function CountDisplay() {
  const { count } = useCountContext();
  return <>
    {count}
  </>;
}
