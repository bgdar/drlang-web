<script lang="ts">
  import type {
    AllTypeDocsSelected,
    PartialDocsSelected,
  } from "../../type/docs/section";

  import { extractSectionNav } from "../../helper";

  interface Props {
    data: PartialDocsSelected;
    handleSelectedSubSection: (sectionType: AllTypeDocsSelected) => void;
    activeKey?: AllTypeDocsSelected;
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
  class="w-full border-2 border-gray-1 bg-main-1 p-4 text-white-light-1 pixel-box font-pixel-body"
>
  <h2
    class="mb-4 border-b-2 border-main-3 pb-2.5 px-1 text-[10px] font-pixel-title uppercase tracking-widest text-gray-3 flex items-center gap-2"
  >
    <span class="inline-block h-2 w-2 bg-gray-3"></span>
    {heading}
  </h2>

  {#if sections.length === 0}
    <div class="border-2 border-dashed border-main-3 bg-main p-3 text-center">
      <p class="text-xs text-gray-2">Belum ada bagian tersedia.</p>
    </div>
  {:else}
    <nav>
      <ul class="space-y-2.5">
        {#each sections as item (item.key)}
          {@const isActive = activeKey === item.key}
          {@const Icon = item.icon}
          <li>
            <button
              type="button"
              onclick={() => handleSelectedSubSection(item.key)}
              class="w-full text-left group flex items-center justify-between gap-2.5
              border-2 px-3 py-2 text-xs transition-transform duration-75 cursor-pointer
              {isActive
                ? 'border-white-light-2 bg-main-3 text-white-light-3 pixel-btn'
                : 'border-main-3 bg-main text-gray-4 hover:border-gray-2 hover:bg-main-2 hover:text-white-light-2'}"
            >
              <div class="flex items-center gap-2.5 truncate">
                {#if Icon}
                  <Icon
                    class="h-4 w-4 shrink-0 transition-transform
                    {isActive
                      ? 'text-white-light-3'
                      : 'text-gray-2 group-hover:text-white-light-2'}"
                    strokeWidth={2.5}
                  />
                {:else}
                  <span
                    class="h-2 w-2 shrink-0
                    {isActive
                      ? 'bg-white-light-3'
                      : 'bg-gray-1 group-hover:bg-gray-3'}"
                  ></span>
                {/if}
                <span class="truncate">{item.title}</span>
              </div>

              {#if isActive}
                <span
                  class="text-[10px] font-pixel-title text-white-light-2 shrink-0"
                >
                  ◀
                </span>
              {/if}
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</aside>
