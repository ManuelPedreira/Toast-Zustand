import { useContext } from "react";
import { ToastContext } from ".";

const useToasts = () => {
  const { toasts, setToasts } = useContext(ToastContext);

  const createToast = ({ message, type, timeOut }: Omit<ToastData, "id">) => {
    const newToast = {
      id: Math.random(),
      message,
      type,
      timeOut,
    };

    setToasts((currentToasts) => [newToast, ...currentToasts]);

    if (timeOut !== undefined) setTimeout(() => deleteToast(newToast.id), timeOut);
  };

  const deleteToast = (id: number) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  };

  return { toasts, createToast, deleteToast };
};

export default useToasts;
