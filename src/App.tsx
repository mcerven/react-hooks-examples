import './App.css'
import React, { useState } from 'react';

const exampleOptions = [
  { name: "useLayoutEffect", value: React.lazy(() => import('./examples/UseLayoutEffectExample'))},
  { name: "useReducer", value: React.lazy(() => import('./examples/UseReducerExample'))},
  { name: "useImperativeHandle", value: React.lazy(() => import('./examples/UseImperativeHandleExample'))},
  { name: "useTransition", value: React.lazy(() => import('./examples/UseTransitionExample'))},
  { name: "useDeferredValue", value: React.lazy(() => import('./examples/UseDeferredValueExample'))},
];

function App() {
  const [optionName, setOptionName] = useState(exampleOptions[0].name);
  const Comp = exampleOptions.find(o => o.name === optionName)?.value;

  return (
    <>
      <div style={{marginBottom: "2rem"}}>
        Choose example
        <select value={optionName} onChange={e => setOptionName(e.target.value)}>
          {exampleOptions.map(({name}) => <option key={name} value={name}>{name}</option>)}
        </select>
      </div>
      <div>
        <React.Suspense fallback={"Loading..."}>
          {Comp && <Comp />}
        </React.Suspense>
      </div>
    </>
  )
}

export default App
