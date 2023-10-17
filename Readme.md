# Simple Chat Application Handbook

Welcome to the Simple Chat Application handbook. This document provides you with an overview of the chat application, its features, how to set it up, and an explanation of the code.

## Overview

The Simple Chat Application is a basic real-time chat system built using Node.js, Express.js, and Socket.io. It allows users to join a chat room, send messages, and see messages from other users in real-time.

## Project Structure

```plaintext
simple-chat/
  |- index.mjs
  |- public/
     |- index.html
     |- script.js
     |- styles.css
```

- `index.mjs`: The Node.js server file that sets up the chat application.
- `public/index.html`: The front-end HTML file for the chat interface.
- `public/script.js`: The front-end JavaScript for real-time messaging.
- -`public/styles.css`: The external CSS file for styling.

## Getting Started

1. Clone this repository or create a new project folder.
2. Ensure you have Node.js installed. If not, download and install it from [Node.js](https://nodejs.org/).
3. Install the required dependencies by running:

```bash
npm install express socket.io
```

4. Start the server by running:

```bash
node index.mjs
```

5. Open a web browser and visit http://localhost:3000 to access the chat application.

# Simple Chat Application - Code Readme

Below, you'll find the code for the three main files that make up the Simple Chat Application: `index.mjs`, `public/index.html`, and `public/script.js`.

## index.mjs (Node.js Server)

```javascript
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
```

## public/index.html (Front-End HTML)

```html
<!DOCTYPE html>

<html>
  <head>
    <title>Simple Chat</title>

    <link rel="stylesheet" type="text/css" href="styles.css" />
    <!-- Add this line -->
  </head>

  <body>
    <div id="chat-container">
      <h1>Simple Chat</h1>

      <ul id="messages"></ul>

      <form id="form" action="">
        <input
          id="message"
          type="text"
          placeholder="Type a message"
          autocomplete="off"
        />

        <button>Send</button>
      </form>
    </div>

    <script src="/socket.io/socket.io.js"></script>

    <script src="script.js"></script>
  </body>
</html>
```

## public/script.js (Front-End JavaScript)

```javascript
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
```

You can use the above code to set up your Simple Chat Application. Remember to adjust the code as needed for your specific requirements.

## Usage

1. Enter a message in the input field at the bottom.
2. Click the "Send" button to send your message.
3. All messages from connected users will be displayed in real-time in the chat area.

## Features

- Real-time chat in a single chat room.
- Messages are broadcasted to all connected clients.
- A clean and user-friendly interface.

## Customization

You can customize the chat application by modifying the HTML, CSS, and JavaScript files in the `public` directory to fit your needs.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to modify and expand it according to your requirements.

Enjoy your basic real-time chat application!

-[Sarvadnya Chavhan](https://x.com/soulkadhiii)
