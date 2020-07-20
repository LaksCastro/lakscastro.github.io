export default function Instance(stateManager, context) {
  function call() {
    context.call(stateManager);
  }

  const self = {
    call,
  };

  return Object.freeze(self);
}
