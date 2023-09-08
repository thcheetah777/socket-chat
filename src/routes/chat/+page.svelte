<script lang="ts">
  import type { PageData } from "./$types";
  import { io } from "socket.io-client";

  export let data: PageData;
  const socket = io();

  let messageInput = "";
  let messagesElement: HTMLElement;
  let messages: string[] = [];

  socket.on("chat message", message => {
    messages = [...messages, message];
  });

  function sendMessage() {
    if (messageInput) {
      socket.emit("chat message", messageInput);
      messageInput = "";

      setTimeout(() => {
        messagesElement.scrollTop = messagesElement.scrollHeight;
      }, 10);
    }
  }
</script>

<div class="h-full">
  <ul class="h-[85%] overflow-auto" bind:this={messagesElement}>
    {#each messages as message}
      <li class="p-1 px-4">
        {message}
      </li>
    {/each}
  </ul>

  <div class="flex justify-center items-center h-[15%]">
    <form class="p-4 w-full" on:submit|preventDefault={sendMessage}>
      <input type="text" class="input input-primary w-full block" bind:value={messageInput} />
    </form>
  </div>
</div>
