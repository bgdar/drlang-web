<script lang="ts">
  import type {
    AllTypeStdSelected,
    PartialStdSelected,
  } from "../../type/stdMethod/section";

  import { extractSectionNav } from "../../helper";

  interface Props {
    data: PartialStdSelected;
    handleSelectedSubSection: (sectionType: AllTypeStdSelected) => void;
    activeKey?: AllTypeStdSelected;
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
  class="w-full rounded-none border-2 border-main-3 bg-main-1 p-4 text-white-light-1 pixel-box font-pixel-body"
>
  <h2
    class="mb-4 border-b-2 border-dashed border-main-3 pb-2.5 px-1 font-pixel-title text-[10px] uppercase tracking-widest text-gray-3 flex items-center gap-2"
  >
    <span class="inline-block h-2 w-2 bg-gray-4"></span>
    <span>{heading} Section</span>
  </h2>

  {#if sections.length === 0}
    <p
      class="px-2 py-3 border-2 border-dashed border-main-2 text-xs text-gray-2"
    >
      &gt; Belum ada bagian tersedia.
    </p>
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
              class="w-full text-left group flex items-center gap-2.5 rounded-none border-2 px-3 py-2 text-xs transition-all duration-100 cursor-pointer
              {isActive
                ? 'border-white-light-1 bg-main-3 font-bold text-white-light-3 translate-x-[2px] translate-y-[2px]'
                : 'border-main-3 bg-main text-gray-4 pixel-btn hover:border-gray-3 hover:bg-main-2 hover:text-white-light-2'}"
            >
              <!-- <span -->
              <!--   class="h-2 w-2 shrink-0 rounded-none transition-colors -->
              <!--     {isActive -->
              <!--     ? 'bg-white-light-3' -->
              <!--     : 'bg-gray-1 group-hover:bg-gray-4'}" -->
              <!-- ></span> -->

              {#if Icon}
                <Icon
                  size={15}
                  strokeWidth={2.25}
                  class="shrink-0 transition-colors {isActive
                    ? 'text-white-light-3'
                    : 'text-gray-3 group-hover:text-white-light-2'}"
                />
              {/if}

              <span class="truncate">{item.title}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</aside>
