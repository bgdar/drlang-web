<script lang="ts">
  import DaftarPages from "../lib/components/daftarPages.svelte";
  import DaftarStdSection from "../lib/components/stdMethod/daftarStdSection.svelte";
  import TerminalCode from "../lib/components/terminalCode.svelte";
  import { pageStdMethodData } from "../lib/data/pageDocs";
  import { DrinStdData } from "../lib/data/stdMethod/section/drin";
  import { DroutStdData } from "../lib/data/stdMethod/section/drout";
  import type {
    AllTypeStdSelected,
    PartialStdSelected,
    TipeStdSectionSelected,
  } from "../lib/type/stdMethod/section";

  let searchQuery = $state("");
  // Reactive statement: memfilter daftar halaman berdasarkan input pencarian
  let filteredDocs = $derived(
    pageStdMethodData.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  let currentSection = $state<TipeStdSectionSelected>("drout");

  let dataCurrentSection = $derived.by<PartialStdSelected>(() => {
    if (currentSection === "drout") {
      return DroutStdData;
    } else if (currentSection == "drin") {
      return DrinStdData;
    }
    return {};
  });

  // Sub section
  let selectedSubSection = $state<AllTypeStdSelected>("log");

  const handleSelectedSection = (section: string) => {
    let sectionNew = section as TipeStdSectionSelected;
    currentSection = sectionNew;

    if (sectionNew === "drout") {
      selectedSubSection =
        (Object.keys(DroutStdData)[0] as AllTypeStdSelected) ?? "log";
    } else if (sectionNew === "drin") {
      selectedSubSection =
        (Object.keys(DrinStdData)[0] as AllTypeStdSelected) ?? "input";
    }
  };

  let aktiveDocs = $derived(dataCurrentSection[selectedSubSection]);

  const handleSelectedSubSection = (newSectioon: AllTypeStdSelected) => {
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
      <DaftarStdSection
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
      <TerminalCode
        currentSection={String(currentSection)}
        tipeSelected={selectedSubSection}
        {aktiveDocs}
      />
    </section>
  </main>
</div>
