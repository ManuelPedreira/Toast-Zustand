import { create } from "zustand";

type ToastStoreType = {
  toasts: ToastData[];
  createToast: (newToast: Omit<ToastData, "id">) => void;
  deleteToast: (toastId: number) => void;
};

const useToasts = create<ToastStoreType>(
  (set): ToastStoreType => ({
    toasts: [],
    createToast: (newToast) => set((state) => ({ toasts: addToast(newToast, state) })),
    deleteToast: (toastId) => set((state) => ({ toasts: removeToast(toastId, state) })),
  })
);

const addToast = (newToast: Omit<ToastData, "id">, state: ToastStoreType): ToastData[] => {
  const newFullToast: ToastData = { ...newToast, id: Math.random() };

  if (newFullToast.timeOut !== undefined)
    setTimeout(() => state.deleteToast(newFullToast.id), newFullToast.timeOut);

  return [newFullToast, ...state.toasts];
};

const removeToast = (toastId: number, state: ToastStoreType): ToastData[] => {
  return state.toasts.filter((toast) => toast.id !== toastId);
};

export default useToasts;
