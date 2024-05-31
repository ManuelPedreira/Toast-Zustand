import { ToastButton, ToastCore, ToastPlaceholder, ToastProgressBar } from "./toast.styled";

type ToastProps = {
  message: string;
  type?: ToastType;
  timeOut?: number;
  onClose?: React.MouseEventHandler<HTMLInputElement>;
};

const Toast = ({ message, type = "NORMAL", timeOut = 5000, onClose }: ToastProps) => {
  return (
    <ToastPlaceholder type={type}>
      <ToastCore>
        {message}
        <ToastButton type="button" value="X" onClick={onClose} />
      </ToastCore>
      <ToastProgressBar $timeOut={timeOut} />
    </ToastPlaceholder>
  );
};

export default Toast;
