import { useState, useTransition } from "react";
import { SearchResult, results } from "../helpers/search-results";

export default function UseTransitionExample() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const [isPending, startTransition] = useTransition();
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);

    startTransition(() => {
      setSearchResult(results.filter(p => p.text.includes(e.target.value)));
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} placeholder="Type a number" />
      <div>
        {isPending
          ? "Loading..."
          : searchResult.map(p => <div key={p.key}>{p.text}</div>)
        }
      </div>
    </>
  )
}
