<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Favicon from "../../public/favicon.ico";
</script>

<div
  in:fade={{ duration: 150 }}
  out:fade={{ duration: 250 }}
  class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-main text-white-light-2 select-none"
>
  <div
    class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(var(--color-gray-3)_1px,transparent_1px)] [background-size:16px_16px]"
  ></div>

  <div
    class="relative z-10 w-full max-w-xs sm:max-w-sm mx-4 p-6 bg-main-1 border-4 border-main-3 pixel-box-light flex flex-col items-center text-center"
  >
    <div class="inline-block px-3 py-1 mb-5 bg-main border-2 border-gray-1">
      <span
        class="font-pixel-title text-[10px] text-white-light-3 tracking-wider"
      >
        Dr <span class="text-gray-3">Lang</span>
      </span>
    </div>

    <div
      class="mb-5 p-3 bg-main border-2 border-gray-1 pixel-box flex items-center justify-center"
    >
      <img
        src={Favicon}
        alt="Dr Lang Loading Icon"
        class="w-16 h-16 sm:w-20 sm:h-20 object-contain pixel-art animate-pixel-bounce"
      />
    </div>
    <p
      class="font-pixel-title text-xs sm:text-sm text-white-light-2 tracking-wider mb-2"
    >
      LOADING<span class="animate-pulse">...</span>
    </p>

    <p class="font-pixel-body text-xs text-gray-3">
      Preparing assets &amp; fonts
    </p>

    <div class="w-full h-4 mt-5 p-0.5 bg-main border-2 border-gray-1">
      <div class="h-full bg-white-light-2 animate-pixel-progress"></div>
    </div>
  </div>
</div>

<style>
  @keyframes pixel-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  .animate-pixel-bounce {
    animation: pixel-bounce 0.8s steps(2, end) infinite;
  }

  @keyframes pixel-progress {
    0% {
      width: 10%;
    }
    50% {
      width: 75%;
    }
    100% {
      width: 100%;
    }
  }

  .animate-pixel-progress {
    animation: pixel-progress 1.5s steps(8, end) infinite;
  }
</style>
