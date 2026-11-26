<script lang="ts">
  import { ChevronRight, Hash } from "@lucide/svelte";
  import type { PageLinkDocs } from "../type/pagesLink";

  interface Props {
    searchQuery: string;
    filteredDocs: PageLinkDocs[];
    activePage: string;
    handleSelectedSection: (section: string) => void;
  }

  let {
    searchQuery = $bindable(""),
    filteredDocs = [],
    activePage,
    handleSelectedSection,
  }: Props = $props();
</script>

<div class="font-pixel-body space-y-5">
  <div class="flex flex-col gap-2">
    <label
      for="search"
      class="font-pixel-title text-[10px] text-main-2 uppercase tracking-wider"
    >
      Cari Dokumentasi
    </label>
    <input
      id="search"
      type="text"
      bind:value={searchQuery}
      placeholder="Ketik kata kunci..."
      class="w-full px-3 py-2.5 text-xs rounded-none border-2 border-main-3 bg-white-light-1 text-main placeholder:text-gray-2 focus:outline-none focus:border-main focus:bg-white transition-none"
    />
  </div>

  <div class="flex flex-col gap-2">
    <h3
      class="font-pixel-title text-[10px] text-main-2 uppercase tracking-wider mb-1"
    >
      Daftar Halaman
    </h3>

    <div class="flex flex-col gap-2">
      {#each filteredDocs as doc (doc.tipeSection)}
        {@const isActive = activePage === String(doc.tipeSection)}
        <button
          type="button"
          onclick={() => handleSelectedSection(doc.tipeSection)}
          class="w-full text-left px-3 py-2.5 text-xs rounded-none border-2 transition-none cursor-pointer flex items-center gap-2.5 capitalize
          {isActive
            ? 'bg-main border-main-3 text-white-light-3 font-bold shadow-[3px_3px_0_0_var(--color-main-3)]'
            : 'bg-white-light-1 border-gray-3 text-main-2 hover:bg-main-2 hover:border-main-3 hover:text-white-light-2'}"
        >
          <span
            class="shrink-0 {isActive
              ? 'text-white-light-2'
              : 'text-gray-2 group-hover:text-white-light-2'}"
          >
            {#if isActive}
              <ChevronRight class="w-3.5 h-3.5" strokeWidth={2.5} />
            {:else}
              <Hash class="w-3.5 h-3.5" strokeWidth={2} />
            {/if}
          </span>
          <span class="truncate">{doc.name.replace(/-/g, " ")}</span>
        </button>
      {/each}

      {#if filteredDocs.length === 0}
        <div
          class="p-3 bg-white-light-1 border-2 border-dashed border-gray-3 text-xs text-gray-2 text-center"
        >
          Halaman tidak ditemukan.
        </div>
      {/if}
    </div>
  </div>
</div>
