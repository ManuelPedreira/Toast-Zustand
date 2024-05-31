declare type ToastType = "NORMAL" | "WARNING" | "ERROR";

declare type ToastData = {
  id: number;
  message: string;
  type?: ToastType;
  timeOut?: number;
};
