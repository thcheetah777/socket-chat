import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { ViteDevServer } from "vite";

import { Server } from 'socket.io';

const webSocketServer = {
  name: "webSocketServer",
  configureServer(server: ViteDevServer) {
    if (!server.httpServer) return;

    const io = new Server(server.httpServer);

    // Methods
    const getRooms = () => {
      return [...Array.from(
        io.sockets.adapter.rooms.keys()
      ).filter(
        key => key.startsWith("room")
      )];
    }

    io.on("connection", socket => {
      console.log("👋 User connected!", socket.id);

      socket.on("disconnect", () => {
        console.log("✋ User disconnected!", socket.id);
      });

      socket.on("chat message", message => {
        console.log("💬 New message!", message);
        io.emit("chat message", message);
      })
    });
  }
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
