import "./App.css";
import MainPage from "./pages/mainPage";
import ToastProvider from "./providers/toastProvider";

function App() {
  return (
    <ToastProvider>
      <MainPage />
    </ToastProvider>
  );
}

export default App;
