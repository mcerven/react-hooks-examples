import { useReducer } from "react"

type User = {
  username: string;
  age: number;
};

type ReducerAction = {
  type: "UPDATE" | "DECREMENT_AGE" | "INCREMENT_AGE";
  payload?: Partial<User>;
};

function reducerFn(state: User, action: ReducerAction): User {
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
      <div>
        <label>
          Username
          <input
            type="text"
            value={user.username}
            onChange={(e) => dispatch(
              {type: "UPDATE", payload: {username: e.target.value}}
            )} />
        </label>
      </div>
      <div>
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
            style={{width: "2.5rem"}}
            onClick={() => dispatch({type: "DECREMENT_AGE"})}>-</button>
          <button
            type="button"
            style={{width: "2.5rem"}}
            onClick={() => dispatch({type: "INCREMENT_AGE"})}>+</button>
        </label>
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
