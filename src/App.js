import "./styles.css";
import { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
    return state;
  };

  let initialState = 0;
  let [state, dispatch] = useReducer(reducer, initialState);

  if (state > 5) {
    alert("state is greater than 5");
  } else if (state < 0) {
    alert("state can't be 0 value");
    state = 0;
  }

  return (
    <>
      <div className="App">
        <h1>useReducer hooks</h1>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default App;
