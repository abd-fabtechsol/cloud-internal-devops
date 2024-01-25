import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const SocketContext = createContext({
  socket: null,
  isConnected: false,
  subscribe: () => {},
  unsubscribe: () => {},
});

const SocketProvider = ({ children, token }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const subscribers = useRef([]);

  // Function to create and initialize the WebSocket connection
  const initializeWebSocket = useCallback((socketUrl) => {
    let ws = new WebSocket(socketUrl);

    ws.onopen = () => {
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      // Dispatch the received message to all subscribers
      subscribers.current.forEach((callback) => {
        callback(event.data);
      });
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      // toast.error('Failed To Connect Live Server Please Reload!!');
    };

    setSocket(ws);

    return () => {
      ws.close();
      setSocket(null);
      setIsConnected(false);
    };
  }, []);

  useEffect(() => {
    // Create and initialize the WebSocket connection
    const queryParams = new URLSearchParams();
    if (token) {
      queryParams.set('token', token);
    } else {
      queryParams.set('flag', 'New_CA');
    }
    const socketUrl = `${process.env.REACT_APP_SOCKET_URL}/?${queryParams.toString()}`;
    // initializeWebSocket(socketUrl);
// console.log("connected",socketUrl);
    // Clean up the previous WebSocket connection when the token changes
    return () => {
      if (socket) {
        socket.close();
        setSocket(null);
        setIsConnected(false);
      }
    };
  }, [token, initializeWebSocket]);

  const subscribe = useCallback((callback) => {
    subscribers.current.push(callback);
  }, []);

  const unsubscribe = useCallback((callback) => {
    subscribers.current = subscribers.current.filter((subscriber) => subscriber !== callback);
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected, subscribe, unsubscribe }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
