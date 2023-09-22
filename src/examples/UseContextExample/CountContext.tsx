import { createContext, useContext, useState } from "react";

const CountContext = createContext({
  count: 0,
  increment: () => {},
});

export function CountContextProvider({ children }: React.PropsWithChildren) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(val => val + 1);

  return (
    <CountContext.Provider value={{
      count,
      increment,
    }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCountContext = () => useContext(CountContext);
