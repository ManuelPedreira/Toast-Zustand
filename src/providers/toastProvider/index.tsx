import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ToastContainer from "../../ui/toastContainer";
import { Provider as ReduxProvider } from "react-redux";
import toastsStore from "../../store/toastStore/toastStore";

type ToastProviderPros = {
  children: ReactNode;
};

const ToastProvider = ({ children }: ToastProviderPros) => {
  return (
    <ReduxProvider store={toastsStore}>
      {children}
      {createPortal(<ToastContainer />, document.body)}
    </ReduxProvider>
  );
};

export default ToastProvider;
