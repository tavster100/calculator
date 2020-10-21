import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";


const Modal: FC = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current); // moving {children}
    }
  }, []); // []-> run once!
  return createPortal(<div>{children}</div>, elRef.current);
};
export default Modal;
