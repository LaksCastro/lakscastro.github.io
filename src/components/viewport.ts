export type Viewport = {
  method: () => void;
};

export default function Viewport(): Viewport {
  function privateMethod(): void {
    console.log("Hi");
  }

  function method(): void {
    privateMethod();
  }

  const self: Viewport = {
    method,
  };

  return Object.freeze(self);
}
