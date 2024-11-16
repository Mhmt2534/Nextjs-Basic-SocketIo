// server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// CORS middleware
app.use(cors());

// Statik dosyalar için public klasörü
app.use(express.static("public"));

// Base route
app.get("/", (req, res) => {
  res.send("Socket.IO server çalışıyor");
});

// Socket.IO bağlantı yönetimi
io.on("connection", (socket) => {
  console.log("Kullanıcı bağlandı:", socket.id);

  socket.on("send-message", (message) => {
    console.log("Gelen mesaj:", message);
    io.emit("receive-message", message);
  });

  socket.on("disconnect", () => {
    console.log("Kullanıcı ayrıldı:", socket.id);
  });
});

// Server'ı başlat
const PORT = 8000;
httpServer.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
