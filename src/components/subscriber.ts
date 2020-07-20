export type Subscriber = {
  method: () => void;
};

export default function Subscriber(): Subscriber {
  function privateMethod(): void {
    console.log("Hi");
  }

  function method(): void {
    privateMethod();
  }

  const self: Subscriber = {
    method,
  };

  return Object.freeze(self);
}
