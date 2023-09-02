import { useReducer } from "react"

type User = {
  username: string;
  age: number;
};

type ReducerAction = {
  type: "UPDATE" | "DECREMENT_AGE" | "INCREMENT_AGE";
  payload?: Partial<User>;
};

function reducerFn(state: User, action: ReducerAction) {
  switch (action.type) {
    case "UPDATE":
      return {...state, ...action.payload};
    case "DECREMENT_AGE":
      return {...state, age: state.age - 1};
    case "INCREMENT_AGE":
      return {...state, age: state.age + 1};
    }
    action.type satisfies never;
}

export default function UseReducerComponent() {
  const [user, dispatch] = useReducer(reducerFn, {username: "", age: 18});

  return (
    <>
      <label>
        Username
        <input
          type="text"
          value={user.username}
          onChange={(e) => dispatch(
            {type: "UPDATE", payload: {username: e.target.value}}
          )} />
      </label>
      <label>
        Age
        <input
          type="number"
          value={user.age}
          onChange={(e) => dispatch(
            {type: "UPDATE", payload: {age: e.target.valueAsNumber}}
          )} />
        <button
          type="button"
          onClick={() => dispatch({type: "DECREMENT_AGE"})}>-</button>
        <button
          type="button"
          onClick={() => dispatch({type: "INCREMENT_AGE"})}>+</button>
      </label>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
