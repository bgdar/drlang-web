<script lang="ts">
    import { langState } from "../lib/language";
    import { LANG_KEYS } from "../lib/type/language";

  type OS = "windows" | "macos" | "linux";

  let selectedOS = $state<OS>("windows");
  let copiedId = $state<string | null>(null);

  const installData: Record<
    OS,
    { label: string; requirement: string; command: string; verifyCmd: string }
  > = {
    windows: {
      label: "Windows (PowerShell)",
      requirement: "Windows 10/11 (64-bit) & PowerShell 5.1+",
      command: "irm https://drlang.dev | iex",
      verifyCmd: "drlang --version",
    },
    macos: {
      label: "macOS (Terminal / Homebrew)",
      requirement: "macOS 12 Monterey atau lebih baru",
      command: "brew install drlang",
      verifyCmd: "drlang --version",
    },
    linux: {
      label: "Linux (Bash / Curl)",
      requirement: "Ubuntu 20.04+, Debian, atau Arch Linux",
      command: "curl -fsSL https://drlang.dev | sh",
      verifyCmd: "drlang --version",
    },
  };

  let activeInstall = $derived(installData[selectedOS]);

  let targetStystem = [
    { id: "windows", name: "Windows" },
    { id: "macos", name: "macOS" },
    { id: "linux", name: "Linux" },
  ];

  async function copyText(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    copiedId = id;
    setTimeout(() => {
      copiedId = null;
    }, 2000);
  }
</script>

<div class="theme-pixel min-h-screen bg-white-light-2 text-main py-12 px-6">
  <div class="max-w-4xl mx-auto space-y-10">
    <header class="pb-6 border-b-4 border-main-3">
      <div
        class="inline-block px-3 py-1 mb-4 bg-main text-white-light-2 border-2 border-main-3"
      >
        <span class="font-pixel-title text-[10px] tracking-wider uppercase">
          &gt; Setup_Guide
        </span>
      </div>

      <h1
        class="font-pixel-title text-2xl sm:text-4xl text-main mb-4 leading-snug drop-shadow-[3px_3px_0_var(--color-gray-4)]"
      >
        Instalasi Dr Lang
      </h1>
   <p
    class="font-pixel-body text-gray-1 text-xs sm:text-sm leading-relaxed max-w-2xl"
  >
  {$langState.t(LANG_KEYS.INSTALL.INSTALL_SUBTITLE)}
  </p>
    </header>

    <!-- LANGKAH 1: PILIH SISTEM OPERASI & PERINTAH INSTALASI -->
    <section
      class="p-6 sm:p-8 bg-white-light-3 border-4 border-main-3 pixel-box space-y-6"
    >
      <div class="flex items-center gap-3">
        <span
          class="px-2.5 py-1 bg-main text-white-light-2 font-pixel-title text-xs"
        >
          01
        </span>
        <h2 class="font-pixel-title text-sm sm:text-base text-main-1">
          Unduh &amp; Pasang CLI
        </h2>
      </div>

      <div
        class="flex flex-wrap gap-2 bg-white-light-1 p-2 border-2 border-main-3"
      >
        {#each targetStystem as os (os.id)}
          <button
            onclick={() => (selectedOS = os.id as OS)}
            class="font-pixel-title px-4 py-2.5 text-[10px] uppercase cursor-pointer transition-none
              {selectedOS === os.id
              ? 'bg-main text-white-light-2 border-2 border-main shadow-[3px_3px_0_0_var(--color-gray-1)]'
              : 'bg-white-light-3 text-main-2 hover:bg-white-light-2 border-2 border-main-3'}"
          >
            {os.name}
          </button>
        {/each}
      </div>

      <p class="font-pixel-body text-xs text-gray-1">
        <strong class="text-main-1">Kebutuhan Sistem:</strong>
        {activeInstall.requirement}
      </p>

      <div class="bg-main border-4 border-main-3 pixel-box-light">
        <div
          class="bg-main-2 px-4 py-2.5 flex items-center justify-between border-b-4 border-main-3"
        >
          <span class="font-pixel-title text-[10px] text-gray-4 uppercase">
            {activeInstall.label}
          </span>
          <button
            onclick={() => copyText(activeInstall.command, "install")}
            class="font-pixel-title px-3 py-1 text-[9px] uppercase bg-white-light-2 text-main border-2 border-main hover:bg-white-light-1 active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
          >
            {copiedId === "install" ? "Tersalin!" : "Copy"}
          </button>
        </div>

        <div class="p-4 sm:p-5 overflow-x-auto">
          <code
            class="font-mono text-xs sm:text-sm text-white-light-2 whitespace-pre"
          >
            <span class="text-gray-2 select-none"
              >$
            </span>{activeInstall.command}
          </code>
        </div>
      </div>
    </section>

    <!-- LANGKAH 2: VERIFIKASI INSTALASI -->
    <section
      class="p-6 sm:p-8 bg-white-light-3 border-4 border-main-3 pixel-box space-y-5"
    >
      <div class="flex items-center gap-3">
        <span
          class="px-2.5 py-1 bg-main text-white-light-2 font-pixel-title text-xs"
        >
          02
        </span>
        <h2 class="font-pixel-title text-sm sm:text-base text-main-1">
          Verifikasi Instalasi
        </h2>
      </div>

      <p class="font-pixel-body text-xs sm:text-sm text-main-3 leading-relaxed">
        Buka terminal baru dan jalankan perintah berikut untuk memastikan Dr
        Lang sudah terdaftar di PATH sistem Anda:
      </p>

      <div class="bg-main border-4 border-main-3 pixel-box-light">
        <div
          class="bg-main-2 px-4 py-2.5 flex items-center justify-between border-b-4 border-main-3"
        >
          <span class="font-pixel-title text-[10px] text-gray-4 uppercase">
            Terminal
          </span>
          <button
            onclick={() => copyText(activeInstall.verifyCmd, "verify")}
            class="font-pixel-title px-3 py-1 text-[9px] uppercase bg-white-light-2 text-main border-2 border-main hover:bg-white-light-1 active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
          >
            {copiedId === "verify" ? "Tersalin!" : "Copy"}
          </button>
        </div>

        <div
          class="p-4 sm:p-5 space-y-2 overflow-x-auto font-mono text-xs sm:text-sm"
        >
          <div class="text-white-light-2">
            <span class="text-gray-2 select-none"
              >$
            </span>{activeInstall.verifyCmd}
          </div>
          <div class="text-gray-3">Dr Lang v1.0.0 (ready)</div>
        </div>
      </div>
    </section>

    <!-- LANGKAH 3: HELLO WORLD PERTAMA -->
    <section
      class="p-6 sm:p-8 bg-white-light-3 border-4 border-main-3 pixel-box space-y-5"
    >
      <div class="flex items-center gap-3">
        <span
          class="px-2.5 py-1 bg-main text-white-light-2 font-pixel-title text-xs"
        >
          03
        </span>
        <h2 class="font-pixel-title text-sm sm:text-base text-main-1">
          Program Pertama (Hello World)
        </h2>
      </div>

      <p class="font-pixel-body text-xs sm:text-sm text-main-3 leading-relaxed">
        Buat file bernama <span
          class="px-1.5 py-0.5 bg-white-light-1 border border-main-3 font-mono text-main"
          >main.dr</span
        >
        lalu jalankan dengan perintah
        <span
          class="px-1.5 py-0.5 bg-white-light-1 border border-main-3 font-mono text-main"
          >drlang main.dr</span
        >:
      </p>

      <div class="bg-main border-4 border-main-3 pixel-box-light">
        <div
          class="bg-main-2 px-4 py-2.5 flex items-center justify-between border-b-4 border-main-3"
        >
          <span class="font-pixel-title text-[10px] text-gray-4">
            main.dr
          </span>
          <button
            onclick={() =>
              copyText(
                'call std.drout\n  drout.log("Hello, Dr Lang!")',
                "hello",
              )}
            class="font-pixel-title px-3 py-1 text-[9px] uppercase bg-white-light-2 text-main border-2 border-main hover:bg-white-light-1 active:translate-x-[2px] active:translate-y-[2px] cursor-pointer"
          >
            {copiedId === "hello" ? "Tersalin!" : "Copy"}
          </button>
        </div>

        <pre
          class="p-4 sm:p-5 font-mono text-xs sm:text-sm text-white-light-1 overflow-x-auto leading-relaxed">call std.drout
  drout.log("Hello, Dr Lang!")
&#125;</pre>
      </div>

      <!-- Tombol Lanjut ke Dokumentasi -->
      <div class="pt-4 flex justify-end">
        <p
          class="font-pixel-title px-6 py-3.5 text-xs uppercase text-main bg-white-light-2 hover:bg-white-light-1 border-2 border-main pixel-btn inline-block"
        >
          Silahkan lebih Lanjut di Docs &gt;
        </p>
      </div>
    </section>
  </div>
</div>
