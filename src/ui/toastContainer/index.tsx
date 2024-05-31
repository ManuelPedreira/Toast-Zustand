import useToasts from "../../providers/toastProvider/useToast";
import Toast from "../toast";
import { ToastContainerPlaceholder } from "./toastContainer.styled";

const ToastContainer = () => {
  const { toasts, deleteToast } = useToasts();

  return (
    <ToastContainerPlaceholder>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          timeOut={toast.timeOut}
          onClose={() => deleteToast(toast.id)}
        />
      ))}
    </ToastContainerPlaceholder>
  );
};

export default ToastContainer;
