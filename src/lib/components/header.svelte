<script lang="ts">
  import { ChevronDown, Globe, MenuIcon, XIcon } from "@lucide/svelte";
  import Dr from "../../icon/dr.svelte";
  import type { PropsGlobal } from "../type/pagesLink";
  import { pagesLinks, socialLinks } from "../data/header";
    import { langState ,setLang ,currentLang} from "../language";
    import type { ChangeEventHandler } from "svelte/elements";
    import { LANG_KEYS, type Locale } from "../type/language";

  const { handleChangePage }: PropsGlobal = $props();
  let isMobileMenuOpen = $state(false);



  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
const handleLanguageChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
  setLang(event.currentTarget.value as Locale);
};
</script>


<header
  class="relative bg-main text-white-light-1 border-b-4 border-main-3 px-4 sm:px-6 py-4 flex items-center justify-between font-pixel-body z-50"
>
  <div class="flex items-center">
    <a
      href="/"
      aria-label="Home"
      class="text-white-light-3 hover:text-gray-3 transition-colors pixel-art"
    >
      <Dr />
    </a>
  </div>

  <div class="hidden lg:flex items-center space-x-6">
    <nav class="flex items-center space-x-5 text-sm font-medium">
      {#each pagesLinks as link}
        <button
          onclick={() => handleChangePage(link.name)}
          class="underline cursor-pointer underline-offset-4 text-gray-4 hover:text-white-light-3 transition-colors"
        >
          { link.name}
        </button>
      {/each}
    </nav>

    <!-- Pembatas & Ikon Sosial Media -->
    <nav class="flex items-center space-x-2.5 pl-5 border-l-2 border-main-3">
      {#each socialLinks as social}
        {@const Icon = social.icon}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          class="p-1.5 border-2 border-transparent hover:border-gray-1 hover:bg-main-1 transition-none {social.class}"
        >
          <Icon class="w-4 h-4" strokeWidth={2.5} />
        </a>
      {/each}
    </nav>

    <!-- Language Selector Desktop -->
    <div class="relative flex items-center">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-gray-3"
      >
        <Globe class="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>

      <select
        value={currentLang}
        onchange={handleLanguageChange}
        class="bg-main-3 text-white-light-1 text-xs font-medium py-1.5 pl-8 pr-8 border-2 border-gray-1 appearance-none cursor-pointer focus:outline-none focus:border-white-light-1"
        aria-label="Language Selector"
      >
        <option value="en-US">English (en-US)</option>
        <option value="id-ID">Bahasa Indonesia (id-ID)</option>
      </select>

      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-3"
      >
        <ChevronDown class="w-4 h-4" strokeWidth={2.5} />
      </div>
    </div>
  </div>

  <!-- KANAN (MOBILE): TOMBOL HAMBURGER -->
  <div class="flex lg:hidden items-center">
    <button
      onclick={toggleMenu}
      aria-label="Toggle Menu"
      aria-expanded={isMobileMenuOpen}
      class="p-2 bg-main-1 text-white-light-3 border-2 border-gray-2 pixel-btn cursor-pointer flex items-center justify-center"
    >
      {#if isMobileMenuOpen}
        <XIcon class="w-5 h-5" strokeWidth={2.5} />
      {:else}
        <MenuIcon class="w-5 h-5" strokeWidth={2.5} />
      {/if}
    </button>
  </div>

  <!-- DROPDOWN MENU MOBILE -->
  {#if isMobileMenuOpen}
    <div
      class="lg:hidden absolute top-full left-0 w-full bg-main-1 border-b-4 border-x-4 border-main-3 pixel-box p-5 flex flex-col space-y-5"
    >
      <nav class="flex flex-col space-y-2.5">
        <span class="font-pixel-title text-[10px] text-gray-2 uppercase tracking-widest mb-1">
          {$langState.t(LANG_KEYS.NAV.NAV_TITLE)}
        </span>

        {#each pagesLinks as link}
          <button
            onclick={() => handleChangePage(link.name)}
            class="w-full text-left px-3 py-2.5 bg-main border-2 border-main-3 text-gray-4 hover:text-white-light-3 hover:border-gray-2 active:translate-x-1 active:translate-y-1 transition-none text-sm cursor-pointer flex items-center justify-between group"
          >
            <span>{ link.name}</span>
            <span class="opacity-0 group-hover:opacity-100 text-white-light-3 font-pixel-title text-xs">
              &lt;
            </span>
          </button>
        {/each}
      </nav>

      <div class="border-t-2 border-dashed border-gray-1"></div>

      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <span class="font-pixel-title text-[10px] text-gray-2 uppercase tracking-widest">
            {$langState.t(LANG_KEYS.NAV.SOCIAL_TITLE)}
          </span>
          <nav class="flex flex-wrap items-center gap-3">
            {#each socialLinks as social}
              {@const Icon = social.icon}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                class="p-2.5 bg-main border-2 border-main-3 text-gray-4 hover:text-white-light-3 hover:border-white-light-1 pixel-btn transition-none flex items-center justify-center {social.class}"
              >
                <Icon class="w-4 h-4" strokeWidth={2.5} />
              </a>
            {/each}
          </nav>
        </div>

        <!-- Dropdown Bahasa versi Mobile -->
        <div class="flex flex-col space-y-2">
          <span class="font-pixel-title text-[10px] text-gray-2 uppercase tracking-widest">
            {$langState.t(LANG_KEYS.NAV.LANG_TITLE)}
          </span>
          <div class="relative flex items-center w-full">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-3"
            >
              <Globe class="w-4 h-4" strokeWidth={2.5} />
            </div>

            <select
              value={currentLang}
              onchange={handleLanguageChange}
              class="w-full bg-main-3 text-white-light-1 text-xs font-medium py-2.5 pl-9 pr-8 border-2 border-gray-1 appearance-none cursor-pointer focus:outline-none focus:border-white-light-1"
              aria-label="Mobile Language Selector"
            >
              <option value="en-US">English (en-US)</option>
              <option value="id-ID">Bahasa Indonesia (id-ID)</option>
            </select>

            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-3"
            >
              <ChevronDown class="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
