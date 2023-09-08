<script lang="ts">
  import { io } from "socket.io-client";
  import "iconify-icon";

  const socket = io();
</script>

<div class="w-full h-full p-8 space-y-8">
  <div class="flex justify-between">
    <h1 class="font-bold text-3xl">Rooms</h1>
    <button class="btn btn-primary text-white" on:click={null}>
      <iconify-icon icon="gg:math-plus" class="text-xl"></iconify-icon>
      Create Room
    </button>
  </div>

  <!-- <ul class="grid grid-cols-3 gap-2">
    {#each rooms as room}
      <li class="bg-neutral-700 rounded-lg h-40 hover:border-white border-neutral-500 border duration-200">
        <a href="/chat/{room}" class="h-full block p-4">
          <h1 class="font-medium text-lg">{room}</h1>
        </a>
      </li>
    {/each}
  </ul> -->
</div>
