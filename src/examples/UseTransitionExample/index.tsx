import { useState, useTransition } from "react";

type Result = { key: number; text: string; };

const results: Result[] = Array.from({ length: 50_000 }, (_, i) => ({
  key: i,
  text: `${i}`.padStart(6, "0"),
}));

function UseTransitionExample() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<Result[]>([]);
  const [isPending, startTransition] = useTransition();
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);

    startTransition(() => {
      setSearchResult(results.filter(p => p.text.includes(e.target.value)));
    });
  }

  return (
    <>
      <input type="text" value={searchText} onChange={handleChange} placeholder="Type a number" />
      <div>
        {isPending
          ? "Loading..."
          : searchResult.map(p => <div key={p.key}>{p.text}</div>)
        }
      </div>
    </>
  )
}

export default UseTransitionExample