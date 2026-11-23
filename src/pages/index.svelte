<script lang="ts">
  import { Terminal } from "@lucide/svelte";
  import Footer from "../lib/components/footer.svelte";
  import { features } from "../lib/data";

  // import GearAnimation from "../icon/gear-animation.svelte";
  import { pagesName, type PropsGlobal } from "../lib/type/pagesLink";

  const { handleChangePage }: PropsGlobal = $props();

  let copied = $state(false);

  const codeSnippet = `call std.drout
drout.log("hellow word")`;

  function copyCode() {
    navigator.clipboard.writeText(codeSnippet);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<section
  id="center"
  class="font-pixel-body py-20 px-6 bg-main-1 border-b-4 border-main-2 relative overflow-hidden"
>
  <div
    class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(var(--color-gray-3)_1px,transparent_1px)] [background-size:16px_16px]"
  ></div>

  <div
    class="z-10 relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-y-16 md:gap-y-24 gap-x-12"
  >
    <!-- BARIS 1 t -->
    <div class="order-2 md:order-1 text-center md:text-left">
      <div class="inline-block px-3 py-1 mb-4 bg-main border-2 border-gray-1">
        <span
          class="font-pixel-title text-xs text-white-light-3 tracking-wider"
        >
          Dr <span class="text-gray-3">Lang</span>
        </span>
      </div>

      <div
        class="font-pixel-title text-3xl sm:text-5xl tracking-wider space-y-3 leading-tight"
      >
        <p class="text-white-light-2 drop-shadow-[4px_4px_0_var(--color-main)]">
          Simple
        </p>
        <p class="text-gray-2 text-base sm:text-xl">- And -</p>
        <p class="text-gray-4 drop-shadow-[4px_4px_0_var(--color-main)]">
          Fast
        </p>
      </div>

      <p
        class="mt-6 max-w-md mx-auto md:mx-0 text-xs sm:text-sm text-gray-3 leading-relaxed"
      >
        Bahasa pemrograman yang berfokus pada performa tinggi dan kemudahan
        dalam penggunaan.
      </p>

      <div class="mt-8">
        <button
          onclick={() => handleChangePage(pagesName.Docs)}
          class="font-pixel-title px-6 py-4 text-xs uppercase text-main bg-white-light-2 hover:bg-white-light-1 border-2 border-main pixel-btn transition-none cursor-pointer"
        >
          &gt; Get Started
        </button>
      </div>
    </div>

    <div class="order-1 md:order-2 flex justify-center md:justify-end w-full">
      <div
        class="w-full max-w-md p-6 sm:p-8 bg-main border-4 border-main-3 pixel-box-light flex items-center justify-center"
      >
        <img
          src="/favicon.ico"
          alt="Dr Lang Icon"
          class="w-40 h-40 sm:w-56 sm:h-56 object-contain pixel-art"
        />
      </div>
    </div>

    <!-- BARIS 2  -->
    <div class="order-3 flex justify-center md:justify-start w-full">
      <div
        class="w-full max-w-md p-6 sm:p-8 bg-main border-4 border-main-3 pixel-box-light flex flex-col items-center justify-center gap-4 min-h-60"
      >
        <Terminal
          class="w-28 h-28 sm:w-36 sm:h-36 text-white-light-2"
          strokeWidth={1.5}
        />
        <span
          class="font-pixel-title text-xs text-gray-3 tracking-widest uppercase"
        >
          Clean Syntax
        </span>
      </div>
    </div>

    <div class="order-4 flex justify-center md:justify-end w-full">
      <div
        id="hello-world"
        class="w-full max-w-md bg-main border-4 border-main-3 pixel-box-light"
      >
        <div
          class="bg-main-2 px-4 py-3 flex items-center justify-between border-b-4 border-main-3"
        >
          <div class="flex items-center gap-2">
            <div class="w-3.5 h-3.5 bg-gray-2 border-2 border-main"></div>
            <div class="w-3.5 h-3.5 bg-gray-3 border-2 border-main"></div>
            <div class="w-3.5 h-3.5 bg-gray-4 border-2 border-main"></div>
          </div>
          <span
            class="font-pixel-title text-[10px] text-gray-4 tracking-wider uppercase"
          >
            main.dr
          </span>
        </div>
        <div
          class="p-5 sm:p-6 text-white-light-1 font-pixel-body text-xs sm:text-sm overflow-x-auto"
        >
          <div
            class="bg-main-1 p-4 sm:p-5 border-4 border-main-3 shadow-[4px_4px_0_0_var(--color-main-2)]"
          >
            <pre
              class="font-mono text-xs sm:text-sm text-white-light-1 overflow-x-auto whitespace-pre leading-relaxed">call std.drout
drout.log("hellow word")</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="font-pixel-body ticks bg-main-1 py-16 border-b-4 border-main-2">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each features as feature}
        {@const Icon = feature.icon}
        <div
          class="p-6 bg-main rounded-none border-4 border-main-3 hover:border-white-light-1 pixel-box-light transition-none group"
        >
          <div
            class="mb-4 w-12 h-12 flex items-center justify-center bg-main-1 border-2 border-gray-1 text-white-light-2 group-hover:bg-main-2 group-hover:text-white-light-1"
          >
            <Icon class="w-6 h-6" strokeWidth={1.75} />
          </div>
          <h3
            class="font-pixel-title text-xs text-white-light-1 mb-3 leading-snug"
          >
            {feature.title}
          </h3>
          <p class="text-xs text-gray-3 leading-relaxed">
            {feature.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
