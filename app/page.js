"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socketInitializer();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const socketInitializer = () => {
    socket = io("http://localhost:8000");

    socket.on("connect", () => {
      console.log("Bağlantı başarılı");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Bağlantı koptu");
      setConnected(false);
    });

    socket.on("receive-message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && socket) {
      socket.emit("send-message", message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl mb-4">Socket.IO Chat</h1>

      <div className="mb-4">
        Durum:{" "}
        {connected ? (
          <span className="text-green-500">Bağlı</span>
        ) : (
          <span className="text-red-500">Bağlantı Yok</span>
        )}
      </div>

      <form onSubmit={sendMessage} className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mr-2 rounded text-gray-950"
          placeholder="Mesajınızı yazın..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!connected}
        >
          Gönder
        </button>
      </form>

      <div className="space-y-2">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 bg-neutral-950 rounded">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
