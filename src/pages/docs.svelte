<script lang="ts">
  import DaftarPages from "../lib/components/docs/daftarPages.svelte";
  import DaftarSections from "../lib/components/docs/daftarSections.svelte";
  import { pageDocsData } from "../lib/data/docs/pageDocs";
  import type { DokumentasiCodeItem } from "../lib/type/docs/codeItem";
  import { VariableTipeDocsData } from "../lib/data/docs/section/variabel-tipe";
  import type {
    AllTypeSelected,
    PartialDocumentationSelected,
    TipeSectionSelected,
  } from "../lib/type/docs/section";
  import { KolektifDocsData } from "../lib/data/docs/section/kolektif";
  import SectionDocs from "../lib/components/docs/sectionDocs.svelte";
  import { FunctionDocsData } from "../lib/data/docs/section/function";
  import { ControlFlowDocsData } from "../lib/data/docs/section/controllFlow";
  import { OperatorDocsData } from "../lib/data/docs/section/operator";

  let searchQuery = $state("");
  // Reactive statement: memfilter daftar halaman berdasarkan input pencarian
  let filteredDocs = $derived(
    pageDocsData.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  let currentSection = $state<TipeSectionSelected>("variabelTipe");

  let dataCurrentSection = $derived.by<PartialDocumentationSelected>(() => {
    if (currentSection === "variabelTipe") {
      return VariableTipeDocsData;
    } else if (currentSection == "operator") {
      return OperatorDocsData;
    } else if (currentSection === "kolektif") {
      return KolektifDocsData;
    } else if (currentSection === "fungsi") {
      return FunctionDocsData;
    } else if (currentSection == "structurKontroll") {
      return ControlFlowDocsData;
    }

    return {};
  });
  // Filter digunakan untuk memastikan nilai undefined dari Partial terbuang secara aman di TypeScript
  let docsArrayUntukSub = $derived<DokumentasiCodeItem[]>(
    Object.values(dataCurrentSection).filter(
      (item): item is DokumentasiCodeItem => item !== undefined,
    ),
  );

  // Sub section
  let selectedSubSection = $state<AllTypeSelected>("int");

  const handleSelectedSection = (section: TipeSectionSelected) => {
    currentSection = section;

    if (section === "variabelTipe") {
      selectedSubSection =
        (Object.keys(VariableTipeDocsData)[0] as AllTypeSelected) ?? "int";
    } else if (section === "kolektif") {
      selectedSubSection =
        (Object.keys(KolektifDocsData)[0] as AllTypeSelected) ?? "array";
    } else if (section === "operator") {
      selectedSubSection =
        (Object.keys(OperatorDocsData) as AllTypeSelected) ?? "aritmatika";
    } else if (section === "fungsi") {
      selectedSubSection =
        (Object.keys(FunctionDocsData)[0] as AllTypeSelected) ?? "basic";
    } else if (section === "structurKontroll") {
      selectedSubSection =
        (Object.keys(ControlFlowDocsData)[0] as AllTypeSelected) ?? "ifElse";
    }
  };

  const handleSelectedSubSection = (newSectioon: AllTypeSelected) => {
    selectedSubSection = newSectioon;
  };
</script>

<div
  class="theme-pixel flex flex-col md:flex-row-reverse min-h-screen bg-white-light-2 text-main"
>
  <aside
    class="w-full md:w-80 bg-white-light-3 border-b-4 md:border-b-0 md:border-l-4 border-main-3 p-6 flex flex-col justify-between md:h-[95vh] md:sticky md:top-[2.5vh] overflow-y-auto gap-6 shrink-0"
  >
    <div class="p-4 bg-white-light-2 border-4 border-main-3 pixel-box shrink-0">
      <DaftarPages
        {searchQuery}
        {handleSelectedSection}
        {filteredDocs}
        activePage={currentSection}
      />
    </div>

    <div class="p-4 bg-white-light-2 border-4 border-main-3 pixel-box shrink-0">
      <DaftarSections
        {handleSelectedSubSection}
        data={dataCurrentSection}
        activeKey={selectedSubSection}
        heading={String(currentSection)}
      />
    </div>
  </aside>

  <main class="flex-1 p-6 md:p-12 md:pr-16 overflow-y-auto">
    <header class="mb-12 pb-6 border-b-4 border-main-3">
      <div
        class="inline-block px-3 py-1 mb-4 bg-main text-white-light-2 border-2 border-main-3"
      >
        <span class="font-pixel-title text-[10px] tracking-wider uppercase">
          &gt; Docs_v1.0
        </span>
      </div>

      <h1
        class="font-pixel-title text-2xl sm:text-3xl md:text-4xl text-main mb-4 leading-snug drop-shadow-[3px_3px_0_var(--color-gray-4)]"
      >
        Dokumentasi Sintaks
      </h1>
      <p
        class="font-pixel-body text-gray-1 text-sm sm:text-base leading-relaxed"
      >
        Pelajari cara menggunakan bahasa pemrograman ini dengan mudah.
      </p>
    </header>

    <section
      class="mb-10 p-6 bg-white-light-3 border-4 border-main-3 pixel-box"
    >
      <h2
        class="font-pixel-title text-base sm:text-lg text-main-1 mb-4 flex items-center gap-2"
      >
        <span class="text-gray-1">#</span> Pendahuluan
      </h2>
      <p class="font-pixel-body text-main-3 text-xs sm:text-sm leading-relaxed">
        Bahasa ini dirancang untuk memiliki sintaks yang mudah dipahami. Gunakan
        navigasi di sebelah kanan untuk mencari modul spesifik yang ingin Anda
        pelajari.
      </p>
    </section>

    <section class="mb-10">
      <SectionDocs
        {currentSection}
        tipeSelected={selectedSubSection}
        currentContent={dataCurrentSection}
      />
    </section>
  </main>
</div>
