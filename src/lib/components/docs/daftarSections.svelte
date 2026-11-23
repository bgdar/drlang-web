<script lang="ts">
  import { extractSectionNav } from "../../helper/docs";
  import type {
    AllTypeSelected,
    PartialDocumentationSelected,
  } from "../../type/docs/section";

  interface Props {
    data: PartialDocumentationSelected;
    handleSelectedSubSection: (sectionType: AllTypeSelected) => void;
    activeKey?: AllTypeSelected;
    heading?: string;
  }

  let {
    data = {},
    activeKey,
    heading = "Daftar Bagian",
    handleSelectedSubSection,
  }: Props = $props();

  let sections = $derived(extractSectionNav(data));
</script>

<aside
  aria-label={heading}
  class="w-full rounded-xl border border-main-2 bg-main-1 p-4 text-white-light-1 shadow-sm"
>
  <h2
    class="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-3"
  >
    {heading} Section
  </h2>

  {#if sections.length === 0}
    <p class="px-2 text-sm text-gray-2">Belum ada bagian tersedia.</p>
  {:else}
    <nav>
      <ul class="space-y-1">
        {#each sections as item (item.key)}
          {@const isActive = activeKey === item.key}
          <li>
            <button
              type="button"
              onclick={() => handleSelectedSubSection(item.key)}
              class="w-full text-left group flex items-center gap-2.5
              rounded-lg px-2.5 py-2 text-sm transition-colors duration-150 cursor-pointer
              {isActive
                ? 'bg-main-3 font-medium text-white-light-3'
                : 'text-gray-4 hover:bg-main-2 hover:text-white-light-2'}"
            >
              <span
                class="h-1.5 w-1.5 rounded-full transition-colors
                  {isActive
                  ? 'bg-white-light-2'
                  : 'bg-gray-1 group-hover:bg-gray-3'}"
              ></span>
              <span class="truncate">{item.title}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</aside>
