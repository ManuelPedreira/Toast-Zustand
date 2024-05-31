import { useDispatch, useSelector } from "react-redux";
import { ToastStoreValue } from "../../store/toastStore/reducer";
import { addToast, removeToast } from "../../store/toastStore/actions";

const useToasts = () => {
  const toasts = useSelector((state: ToastStoreValue) => state.toasts);
  const dispatch = useDispatch();

  const createToast = ({ message, type, timeOut }: Omit<ToastData, "id">) => {
    const newToast = {
      id: Math.random(),
      message,
      type,
      timeOut,
    };

    dispatch(addToast(newToast));

    if (timeOut !== undefined) setTimeout(() => deleteToast(newToast.id), timeOut);
  };

  const deleteToast = (id: number) => {
    dispatch(removeToast({ id }));
  };

  return { toasts, createToast, deleteToast };
};

export default useToasts;
