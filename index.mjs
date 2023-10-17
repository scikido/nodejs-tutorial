import express from "express";
import http from "http";
import { Server as SocketIo } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketIo(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
