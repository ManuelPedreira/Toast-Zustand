type ReduxAction<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};

type ReduxToastActionAdd = ReduxAction<"toasts/addToast", ToastData>;
type ReduxToastActionRemove = ReduxAction<"toasts/removeToast", Pick<ToastData, "id">>;

export type ReduxToastAction = ReduxToastActionAdd | ReduxToastActionRemove;

export const addToast = ({ id, message, type, timeOut }: ToastData): ReduxToastActionAdd => ({
  type: "toasts/addToast",
  payload: {
    id,
    message,
    type,
    timeOut,
  },
});

export const removeToast = ({ id }: Pick<ToastData, "id">): ReduxToastActionRemove => ({
  type: "toasts/removeToast",
  payload: { id },
});
