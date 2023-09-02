import { useRef, useEffect } from "react";
import { CustomInput, CustomInputHandle } from "./CustomInput";


export default function UseImperativeHandleExample() {
  const ref = useRef<CustomInputHandle>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [])
  
  return (
    <>
      <CustomInput ref={ref} />
    </>
  )
}
