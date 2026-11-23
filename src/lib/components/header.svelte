<script lang="ts">
  import { ChevronDown, Globe } from "@lucide/svelte";
  import Dr from "../../icon/dr.svelte";
  import type { PropsGlobal } from "../type/pagesLink";
  import { pagesLinks, socialLinks } from "../data/header";

  const { handleChangePage }: PropsGlobal = $props();
</script>

<header
  class="
  bg-main text-white-light-1 border-b border-co px-6 py-4 flex items-center justify-between"
>
  <div class="flex items-center">
    <a
      href="/"
      aria-label="Home"
      class="text-white-light-3 hover:text-gray-3 transition-colors"
    >
      <Dr />
    </a>
  </div>

  <div class="flex items-center space-x-6">
    <nav class="flex items-center space-x-5 text-sm font-medium">
      {#each pagesLinks as link}
        <button
          onclick={() => handleChangePage(link.name)}
          class="underline cursor-pointer underline-offset-4 text-[#CDD0D4] hover:text-[#FAFAFB] transition-colors"
        >
          {link.name}
        </button>
      {/each}
    </nav>

    <!-- Pembatas & Ikon Sosial Media -->

    <div class="flex items-center space-x-2.5 pl-5 border-l border-[#474950]">
      {#each socialLinks as social}
        {@const Icon = social.icon}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          class="p-1.5 border border-transparent rounded transition-colors {social.class}"
        >
          <Icon class="w-4 h-4" strokeWidth={2} />
        </a>
      {/each}
    </div>

    <div class="relative flex items-center">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-[#979AA0]"
      >
        <Globe class="w-3.5 h-3.5" strokeWidth={2} />
      </div>

      <select
        class="bg-main-3 text-[#E2E4E6] text-xs font-medium py-1.5 pl-8 pr-8 rounded border border-[#474950] appearance-none cursor-pointer focus:outline-none focus:border-[#7B7E85]"
        aria-label="Language Selector"
      >
        <option value="en-US">English (en-US)</option>
        <option value="id-ID">Bahasa Indonesia (id-ID)</option>
      </select>

      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#979AA0]"
      >
        <ChevronDown class="w-4 h-4" strokeWidth={2} />
      </div>
    </div>
  </div>
</header>
