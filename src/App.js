import Routing from "routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import { useWss } from "hooks/useWebsocket";
import { useEffect } from "react";

function App() {
  const { ready, send } = useWss("ws://54.81.132.129:7788");

  useEffect(() => {
    if (ready) {
      send("test message from frontend");
    }
  }, [ready, send]);

  return (
    <Router>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
