import { ReduxToastAction } from "./actions";

export type ToastStoreValue = {
  toasts: ToastData[];
};

const initialState: ToastStoreValue = { toasts: [] };

const toastsReducer = (
  state: ToastStoreValue = initialState,
  action: ReduxToastAction
): ToastStoreValue => {
  if (action.type === "toasts/addToast") {
    const { id, message, timeOut, type } = action.payload;
    const newToast: ToastData = {
      id,
      message,
      type,
      timeOut,
    };

    return {
      ...state,
      toasts: [...state.toasts, newToast],
    };
  }

  if (action.type === "toasts/removeToast") {
    return {
      ...state,
      toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
    };
  }

  return state;
};

export default toastsReducer;
