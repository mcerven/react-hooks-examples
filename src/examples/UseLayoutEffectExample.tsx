import { useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectComponent() {
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!box1.current || !box2.current) return;

    const { bottom } = box1.current.getBoundingClientRect();

    box2.current.style.top = `${bottom + 40}px`;
  }, []);

  return (
    <>
      <div ref={box1} style={{ width: '80px', height: '80px', background: 'blue' }}></div>
      <div ref={box2} style={{ position: 'absolute', width: '80px', height: '80px', background: 'red' }}></div>
    </>
  );
}
