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

## Explanation

1.  **Importing Dependencies**: This code begins by importing necessary dependencies using ES6 module syntax. It imports the `express` library, the built-in `http` module, and the `Server` class from the `socket.io` library.

    ```js
    import express from "express";
    import http from "http";
    import { Server as SocketIo } from "socket.io";
    ```

2.  **Setting Up Express Application**: An Express.js application is created by invoking the `express` function, which is assigned to the `app` constant.

    `const app = express();`

3.  **Creating an HTTP Server**: The `http` module's `createServer` function is used to create an HTTP server. This server will be responsible for handling HTTP requests.

    `const server = http.createServer(app);`

4.  **Initializing Socket.io**: The `Socket.io` library is used to enable real-time communication between clients and the server. It's initialized with the HTTP server created in the previous step. The resulting `io` object represents the Socket.io server.

    `const io = new SocketIo(server);`

5.  **Serving Static Files**: The `app.use` method is used to serve static files from the "public" directory. This allows the client-side HTML, JavaScript, and CSS files to be accessible to users.

    `app.use(express.static("public"));`

6.  **Handling Socket.io Events**: Socket.io allows you to listen for events and perform actions when they occur. In this code, the following events are handled:

    - `connection`: When a user connects to the server, it logs a message to the console.

      ```js
      io.on("connection", (socket) => {
        console.log("A user connected");
      });
      ```

    - `chat message`: This event is triggered when a user sends a chat message. When this event occurs, the message is broadcasted to all connected clients using `io.emit`.

      javascriptCopy code

      ```js
      socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
      });
      ```

    - `disconnect`: When a user disconnects from the server, it logs a message to the console.

      ```jssocket.on("disconnect", () => {
        console.log("A user disconnected");
      });
      ```

7.  **Starting the Server**: Finally, the HTTP server is configured to listen on port 3000, and a callback function is provided to log a message when the server starts.

    ```js
    server.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
    ```

This code sets up the server, serves static files, and establishes real-time communication between clients using Socket.io. It's the foundation for building a real-time chat application.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to modify and expand it according to your requirements.

Enjoy your basic real-time chat application!

-[Sarvadnya Chavhan](https://x.com/soulkadhiii)
