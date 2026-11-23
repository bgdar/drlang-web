<script lang="ts">
  import type {
    AllTypeSelected,
    PartialDocumentationSelected,
    TipeSectionSelected,
  } from "../../type/docs/section";
  import TerminalCode from "./terminalCode.svelte";

  type Props = {
    tipeSelected: AllTypeSelected;
    currentContent: PartialDocumentationSelected;
    currentSection: TipeSectionSelected;
  };

  let { currentContent, tipeSelected, currentSection }: Props = $props();
</script>

<div class="space-y-4">
  <TerminalCode {currentContent} {currentSection} {tipeSelected} />
</div>
