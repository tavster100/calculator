import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div; //{children}
  }
  useEffect(() => {
    
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current); //moving {children}
  }, []); //[]-> run once!
  return createPortal(<div>{children}</div>, elRef.current);
};
export default Modal;
