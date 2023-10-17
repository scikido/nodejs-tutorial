const socket = io();
const form = document.getElementById("form");
const messageInput = document.getElementById("message");
const messages = document.getElementById("messages");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  socket.emit("chat message", messageInput.value);
  messageInput.value = "";
  return false;
});

socket.on("chat message", (msg) => {
  const messageItem = document.createElement("li");
  messageItem.textContent = msg;
  messages.appendChild(messageItem);
});
