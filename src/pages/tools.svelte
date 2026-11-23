
<script lang="ts">
  type Category = 'all' | 'editor' | 'cli' | 'package';

  interface DrTool {
    id: string;
    name: string;
    category: Exclude<Category, 'all'>;
    badge: string;
    desc: string;
    command: string;
    version: string;
  }

  let activeCategory = $state<Category>('all');
  let searchQuery = $state('');
  let copiedId = $state<string | null>(null);

  const toolsList: DrTool[] = [
    {
      id: 'vscode-ext',
      name: 'Dr Lang for VS Code',
      category: 'editor',
      badge: 'EXT',
      desc: 'Syntax highlighting, auto-complete, dan pengecekan error real-time untuk file .dr.',
      command: 'ext install drlang.drlang-vscode',
      version: 'v1.2.0'
    },
    {
      id: 'dr-fmt',
      name: 'drfmt (Code Formatter)',
      category: 'cli',
      badge: 'CLI',
      desc: 'Merapikan indentasi dan gaya penulisan kode Dr Lang secara otomatis sesuai standar.',
      command: 'drlang fmt ./src',
      version: 'v1.0.4'
    },
    {
      id: 'dr-pkg',
      name: 'drpkg (Package Manager)',
      category: 'package',
      badge: 'PKG',
      desc: 'Mengelola dependensi pustaka standar maupun paket komunitas dalam proyek Anda.',
      command: 'drpkg init my-project',
      version: 'v1.1.0'
    },
    {
      id: 'dr-lsp',
      name: 'Dr Language Server',
      category: 'editor',
      badge: 'LSP',
      desc: 'Server protokol bahasa untuk integrasi Neovim, Zed, dan Sublime Text.',
      command: 'drlang lsp --stdio',
      version: 'v0.9.8'
    },
    {
      id: 'dr-repl',
      name: 'Dr Interactive REPL',
      category: 'cli',
      badge: 'CLI',
      desc: 'Uji coba ekspresi dan modul std.drout langsung di terminal tanpa membuat file.',
      command: 'drlang repl',
      version: 'v1.0.0'
    },
    {
      id: 'dr-test',
      name: 'drtest Runner',
      category: 'package',
      badge: 'TEST',
      desc: 'Menjalankan unit test dengan laporan hasil eksekusi bergaya terminal ringkas.',
      command: 'drlang test --watch',
      version: 'v1.0.2'
    }
  ];

  let filteredTools = $derived(
    toolsList.filter((tool) => {
      const matchCategory =
        activeCategory === 'all' || tool.category === activeCategory;
      const matchQuery =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    })
  );

  async function copyCommand(cmd: string, id: string) {
    await navigator.clipboard.writeText(cmd);
    copiedId = id;
    setTimeout(() => {
      copiedId = null;
    }, 2000);
  }
</script>

<div class="theme-pixel min-h-screen bg-white-light-2 text-main py-12 px-6">
  <div class="max-w-5xl mx-auto space-y-10">
    <!-- HEADER HALAMAN -->
    <header class="pb-6 border-b-4 border-main-3">
      <div class="inline-block px-3 py-1 mb-4 bg-main text-white-light-2 border-2 border-main-3">
        <span class="font-pixel-title text-[10px] tracking-wider uppercase">
          &gt; Dev_Toolkit
        </span>
      </div>

      <h1
        class="font-pixel-title text-2xl sm:text-4xl text-main mb-4 leading-snug drop-shadow-[3px_3px_0_var(--color-gray-4)]"
      >
        Tools &amp; Ekosistem
      </h1>
      <p class="font-pixel-body text-gray-1 text-xs sm:text-sm leading-relaxed max-w-2xl">
        Lengkapi alur kerja pengembangan Dr Lang Anda dengan ekstensi editor,
        formatter, dan utilitas CLI resmi.
      </p>
    </header>

    <!-- BAR FILTER KATEGORI & PENCARIAN -->
    <section
      class="p-4 sm:p-5 bg-white-light-3 border-4 border-main-3 pixel-box flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
    >
      <!-- Tombol Filter Kategori -->
      <div class="flex flex-wrap gap-2">
        {#each [
          { id: 'all', label: 'Semua' },
          { id: 'editor', label: 'Editor' },
          { id: 'cli', label: 'CLI' },
          { id: 'package', label: 'Package' }
        ] as cat (cat.id)}
          <button
            onclick={() => (activeCategory = cat.id as Category)}
            class="font-pixel-title px-3.5 py-2 text-[10px] uppercase cursor-pointer transition-none
              {activeCategory === cat.id
                ? 'bg-main text-white-light-2 border-2 border-main shadow-[3px_3px_0_0_var(--color-gray-1)]'
                : 'bg-white-light-2 text-main-2 hover:bg-white-light-1 border-2 border-main-3'}"
          >
            {cat.label}
          </button>
        {/each}
      </div>

      <!-- Input Pencarian Pixel -->
      <div class="w-full md:w-64">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Cari tool..."
          class="pixel-input w-full px-3.5 py-2 bg-white-light-2 text-main font-pixel-body text-xs placeholder:text-gray-2 focus:bg-white-light-3"
        />
      </div>
    </section>

    <!-- GRID KARTU TOOLS -->
    {#if filteredTools.length === 0}
      <div class="p-10 bg-white-light-3 border-4 border-main-3 pixel-box text-center space-y-2">
        <p class="font-pixel-title text-xs text-main-1">Tool Tidak Ditemukan</p>
        <p class="font-pixel-body text-xs text-gray-1">
          Coba kata kunci lain atau pilih kategori "Semua".
        </p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each filteredTools as tool (tool.id)}
          <article
            class="p-6 bg-white-light-3 border-4 border-main-3 pixel-box flex flex-col justify-between gap-5 hover:border-main transition-none"
          >
            <!-- Bagian Atas Kartu -->
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-2">
                <span
                  class="px-2.5 py-1 bg-main text-white-light-2 font-pixel-title text-[9px] uppercase border-2 border-main-3"
                >
                  {tool.badge}
                </span>
                <span class="font-mono text-xs text-gray-1 font-semibold">
                  {tool.version}
                </span>
              </div>

              <h2 class="font-pixel-title text-sm text-main-1 leading-snug">
                {tool.name}
              </h2>

              <p class="font-pixel-body text-xs text-main-3 leading-relaxed">
                {tool.desc}
              </p>
            </div>

            <!-- Bagian Bawah: Mini Terminal Perintah -->
            <div class="bg-main border-2 border-main-3 p-3 flex items-center justify-between gap-3">
              <code class="font-mono text-xs text-white-light-2 truncate">
                <span class="text-gray-2 select-none">$ </span>{tool.command}
              </code>

              <button
                onclick={() => copyCommand(tool.command, tool.id)}
                class="font-pixel-title shrink-0 px-2.5 py-1.5 text-[9px] uppercase bg-white-light-2 text-main border-2 border-main hover:bg-white-light-1 active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
              >
                {copiedId === tool.id ? 'OK!' : 'Copy'}
              </button>
            </div>
          </article>
        {/each}
      </div>
    {/if}

    <!-- BANNER ONLINE PLAYGROUND -->
    <section
      class="p-6 sm:p-8 bg-main text-white-light-1 border-4 border-main-3 pixel-box-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
    >
      <div class="space-y-2">
        <span class="font-pixel-title text-[10px] text-gray-3 uppercase">
          &gt; Web_Sandbox
        </span>
        <h3 class="font-pixel-title text-sm sm:text-base text-white-light-2">
          Coba Dr Lang di Browser
        </h3>
        <p class="font-pixel-body text-xs text-gray-3 max-w-lg leading-relaxed">
          Jalankan kode <code class="text-white-light-2">std.drout</code> langsung tanpa perlu instalasi di komputer lokal.
        </p>
      </div>

      <a
        href="/playground"
        class="font-pixel-title shrink-0 px-5 py-3.5 text-[10px] uppercase bg-white-light-2 text-main border-2 border-main pixel-btn"
      >
        Buka Playground &gt;
      </a>
    </section>
  </div>
</div>
