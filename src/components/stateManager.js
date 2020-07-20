import State from "./state";

export default function StateManager() {
  let states = {};

  function createInstance(key, initialState = {}) {
    const stateInstance = State(initialState);

    states[key] = stateInstance;
  }

  function getInstance(key) {
    return states[key];
  }

  const self = {
    createInstance,
    getInstance,
  };

  return Object.freeze(self);
}
