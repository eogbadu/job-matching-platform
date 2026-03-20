import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export default function useSocket() {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:5050'); // backend URL

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return socketRef;
}
