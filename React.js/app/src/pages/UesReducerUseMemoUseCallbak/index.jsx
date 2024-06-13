import { useReducer, useMemo, useCallback } from "react";

const initialState = {
  detail: { counter: 0, username: "harchi" },
};

function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      {
        return {
          ...state,
          detail: { ...state.detail, counter: ++state.detail.counter },
        };
      }
      break;
    case "MINUS":
      {
        return {
          ...state,
          detail: { ...state.detail, counter: --state.detail.counter },
        };
      }
      break;
    case "CAHNGE_USERNAME":
      {
        return {
          ...state,
          detail: { ...state.detail, username: action.payload },
        };
      }
      break;
    default:
      return state;
  }
}

function Info() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const num = useMemo(() => {
    return 100;
  }, []);

  const func = useMemo(() => {
    return () => 100;
  }, []);

  console.log(num, func);

  return (
    <>
      <h2>Info Page</h2>
      <div className="btn-group">
        <button
          onClick={() => dispatch({ type: "MINUS" })}
          className="btn btn-danger"
        >
          Minus
        </button>
        <button className="btn btn-light">{state.detail.counter}</button>
        <button
          onClick={() => dispatch({ type: "PLUS" })}
          className="btn btn-success"
        >
          Plus
        </button>
        <button
          onClick={() =>
            dispatch({ type: "CAHNGE_USERNAME", payload: "Pouriya Sedaghat" })
          }
          className="btn btn-info"
        >
          {state.detail.username}
        </button>
      </div>
    </>
  );
}
export default Info;
