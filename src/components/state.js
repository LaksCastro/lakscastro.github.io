import { getObjectKey } from "./utils";

export default function State(initialState = {}) {
  let state = initialState;

  function get() {
    return state;
  }

  function set(newState) {
    const getNewState = () =>
      typeof newState === "function" ? newState(state) : newState;

    state = getNewState();
  }

  function getKey(key) {
    return getObjectKey(state, key);
  }

  const self = {
    get,
    set,
    getKey,
  };

  return Object.freeze(self);
}
