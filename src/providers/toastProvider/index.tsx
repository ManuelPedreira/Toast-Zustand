import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ToastContainer from "../../ui/toastContainer";

const ToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      {createPortal(<ToastContainer />, document.body)}
    </>
  );
};

export default ToastProvider;
