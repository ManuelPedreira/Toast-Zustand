import { useState } from "react";
import { InputContainer, MainPageContainer } from "./mainPage.styled";
import useToasts from "../../providers/toastProvider/useToast";

const MainPage = () => {
  const [messageInput, setMessageInput] = useState("");
  const [timeOutInput, setTimeOutInput] = useState(5000);
  const [typeInput, setTypeInput] = useState<ToastType>("NORMAL");

  const toastTypeList: ToastType[] = ["NORMAL", "WARNING", "ERROR"];

  const { toasts, createToast } = useToasts();

  const onAddButtonClick = () => {
    if (messageInput) {
      createToast({ message: messageInput, type: typeInput, timeOut: timeOutInput });
      setMessageInput("");
      setTimeOutInput(5000);
      setTypeInput("NORMAL");
    }
  };

  return (
    <MainPageContainer>
      <InputContainer>
        Message:
        <input value={messageInput} onChange={({ target }) => setMessageInput(target.value)} />
      </InputContainer>
      <InputContainer>
        Time out:
        <input
          type="number"
          value={timeOutInput}
          onChange={({ target }) => setTimeOutInput(Number(target.value))}
        />
      </InputContainer>
      <InputContainer>
        Type:
        <select
          value={typeInput}
          onChange={({ target }) => setTypeInput(target.value as ToastType)}
        >
          {toastTypeList.map((toastType) => (
            <option value={toastType} key={Math.random()}>
              {toastType}
            </option>
          ))}
        </select>
      </InputContainer>
      <button onClick={onAddButtonClick} disabled={!messageInput}>
        Create
      </button>
      <p>Active toast: {toasts.length}</p>
    </MainPageContainer>
  );
};

export default MainPage;
