import { create } from "zustand";

type ToastStoreType = {
  toasts: ToastData[];
  createToast: (newToast: Omit<ToastData, "id">) => void;
  deleteToast: (toastId: number) => void;
};

const useToasts = create<ToastStoreType>(
  (set, get): ToastStoreType => ({
    toasts: [],

    createToast: (newToast) => {
      const newFullToast: ToastData = { ...newToast, id: Math.random() };

      set((state) => ({ toasts: [newFullToast, ...state.toasts] }));

      if (newFullToast.timeOut !== undefined)
        setTimeout(() => get().deleteToast(newFullToast.id), newFullToast.timeOut);
    },

    deleteToast: (toastId) =>
      set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== toastId) })),
  })
);

export default useToasts;
