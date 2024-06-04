import { ReactNode, createContext, useState } from "react";
import { createPortal } from "react-dom";
import ToastContainer from "../../ui/toastContainer";

type ToastContextType = {
  toasts: ToastData[];
  setToasts: React.Dispatch<React.SetStateAction<ToastData[]>>;
};

export const ToastContext = createContext<ToastContextType>({
  toasts: [],
  setToasts: () => {},
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
      {createPortal(<ToastContainer />, document.body)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
