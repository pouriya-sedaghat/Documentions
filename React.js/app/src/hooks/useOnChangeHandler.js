import { useState } from "react";

export function useOnChangeHandler(initialState) {
  const [state, setState] = useState(initialState);
  function onChangeHandler(e) {
    setState(e.target.value);
  }
  return [state, setState, onChangeHandler];
}
