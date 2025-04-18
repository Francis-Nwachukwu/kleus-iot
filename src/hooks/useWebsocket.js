import { useEffect, useRef, useState } from "react";

export const useWss = (url) => {
  const [isReady, setIsReady] = useState(false);
  const [value, setValue] = useState(null);

  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      socket.send("Hello from frontend!");
      setIsReady(true);
    };
    socket.onclose = () => {
      console.log("WebSocket connection closed");
      setIsReady(false);
    };
    socket.onmessage = (event) => {
      console.log("Received:", event.data);
      setValue(event.data);
    };

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, [url]);

  return { isReady, value, send: ws.current?.send.bind(ws.current) };
};
