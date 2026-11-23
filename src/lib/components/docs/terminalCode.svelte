<script lang="ts">
  import type { DokumentasiCodeItem } from "../../type/docs/codeItem";
  import type {
    PartialDocumentationSelected,
    AllTypeSelected,
    TipeSectionSelected,
  } from "../../type/docs/section";

  type Props = {
    currentContent: PartialDocumentationSelected;
    currentSection: TipeSectionSelected;

    // penentu gabungan type untuk di tampilkan per section
    tipeSelected: AllTypeSelected;
  };

  let { currentSection, currentContent, tipeSelected }: Props = $props();

  let aktiveDocs = $derived(currentContent[tipeSelected]);
</script>

{#if aktiveDocs}
  <div
    id={String(tipeSelected)}
    class="bg-main border-4 border-main-3 pixel-box-light"
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
        {currentSection || "syntax"}.dr
      </span>
    </div>
    <div
      class="p-5 sm:p-6 text-white-light-1 font-pixel-body text-xs sm:text-sm overflow-x-auto"
    >
      <div class="flex items-center gap-2">
        <span
          class="px-2 py-1 bg-main-2 border-2 border-main-3 font-pixel-title text-[10px] text-white-light-3 uppercase"
        >
          TYPE
        </span>

        <h3 class="font-pixel-title text-sm sm:text-base text-white-light-2">
          {aktiveDocs.title}
        </h3>
      </div>

      <p class="text-xs sm:text-sm text-gray-3 leading-relaxed">
        {aktiveDocs.desc}
      </p>

      <div
        class="bg-main-1 p-4 sm:p-5 border-4 border-main-3 shadow-[4px_4px_0_0_var(--color-main-2)]"
      >
        <div
          class="flex items-center justify-between mb-3 pb-2 border-b-2 border-main-2"
        >
          <!-- <span class="font-pixel-title text-[9px] text-gray-2 uppercase"> -->
          <!--   Contoh Kode ({tipeAktif}) -->
          <!-- </span> -->
        </div>
        <pre
          class="font-mono text-xs sm:text-sm text-white-light-1 overflow-x-auto whitespace-pre leading-relaxed">{aktiveDocs.code}</pre>
      </div>
    </div>
  </div>
{/if}
