import { useState, useDeferredValue, useMemo, useEffect } from "react";
import { results } from "../helpers/search-results";

export default function UseDeferredValueExample() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const searchResults = useMemo(() => {
    return results.filter(r => r.text.includes(deferredInput));
  }, [deferredInput]);
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  useEffect(() => {
    console.log(`input: ${input}, deferred: ${deferredInput}`);
  }, [input, deferredInput]);

  return (
    <>
      <input type="text" value={input} onChange={handleChange} placeholder="Type a number" />
      <div>
        {searchResults.map(p => <div key={p.key}>{p.text}</div>)}
      </div>
    </>
  )
}
