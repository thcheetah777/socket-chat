import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { ViteDevServer } from "vite";

import { Server } from 'socket.io';

const webSocketServer = {
  name: "webSocketServer",
  configureServer(server: ViteDevServer) {
    if (!server.httpServer) return;

    const io = new Server(server.httpServer);

    io.on("connection", socket => {
      socket.emit("hello", "Hello world 👋");
    });
  }
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});