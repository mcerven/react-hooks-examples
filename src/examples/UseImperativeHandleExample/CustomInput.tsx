import { useRef, forwardRef, useImperativeHandle } from "react";

export type CustomInputHandle = {
  focus: () => void;
};

export const CustomInput = forwardRef<CustomInputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current?.focus();
      }
    }),
    []
  );

  return (
    <>
      <input ref={inputRef} />
    </>
  );
});
