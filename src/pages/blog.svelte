
<script lang="ts">
  type Tag = 'Semua' | 'Rilis' | 'Tutorial' | 'Performa';

  interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tag: Exclude<Tag, 'Semua'>;
    author: string;
    featured?: boolean;
  }

  let selectedTag = $state<Tag>('Semua');
  let searchQuery = $state('');

  const posts: BlogPost[] = [
    {
      slug: 'rilis-dr-lang-v1-0',
      title: 'Dr Lang v1.0 Resmi Dirilis: Sintaks Ringkas & Eksekusi Cepat',
      excerpt:
        'Pelajari fitur utama di versi stabil pertama Dr Lang, mulai dari modul standar std.drout hingga peningkatan kecepatan compiler hingga 3x lipat.',
      date: '20 Nov 2026',
      readTime: '4 mnt baca',
      tag: 'Rilis',
      author: 'Tim Core Dr Lang',
      featured: true
    },
    {
      slug: 'mengenal-modul-std-drout',
      title: 'Panduan Lengkap Menggunakan Modul std.drout untuk Output Terminal',
      excerpt:
        'Cara memformat teks, mencetak log terstruktur, dan melakukan debugging cepat menggunakan pustaka bawaan std.drout.',
      date: '14 Nov 2026',
      readTime: '6 mnt baca',
      tag: 'Tutorial',
      author: 'Arif Pratama'
    },
    {
      slug: 'optimasi-memori-dr-lang',
      title: 'Bagaimana Dr Lang Mengelola Tipe Data Int, Str, dan Float Tanpa Overhead',
      excerpt:
        'Bedah arsitektur internal manajemen memori dan alasan di balik kesederhanaan tipe data dasar di Dr Lang.',
      date: '05 Nov 2026',
      readTime: '8 mnt baca',
      tag: 'Performa',
      author: 'Dina Kusuma'
    },
    {
      slug: 'membangun-cli-pertama',
      title: 'Membangun Aplikasi CLI Sederhana dalam 30 Baris Kode Dr Lang',
      excerpt:
        'Tutorial langkah demi langkah membuat alat bantu baris perintah (CLI) dari nol dan mengompilasinya menjadi binary mandiri.',
      date: '28 Okt 2026',
      readTime: '5 mnt baca',
      tag: 'Tutorial',
      author: 'Arif Pratama'
    }
  ];

  let featuredPost = $derived(posts.find((p) => p.featured) ?? posts[0]);

  let filteredPosts = $derived(
    posts.filter((post) => {
      const matchTag = selectedTag === 'Semua' || post.tag === selectedTag;
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTag && matchSearch;
    })
  );
</script>

<div class="theme-pixel min-h-screen bg-white-light-2 text-main py-12 px-6">
  <div class="max-w-5xl mx-auto space-y-10">
    <!-- HEADER HALAMAN -->
    <header class="pb-6 border-b-4 border-main-3">
      <div class="inline-block px-3 py-1 mb-4 bg-main text-white-light-2 border-2 border-main-3">
        <span class="font-pixel-title text-[10px] tracking-wider uppercase">
          &gt; Dev_Blog &amp; Changelog
        </span>
      </div>

      <h1
        class="font-pixel-title text-2xl sm:text-4xl text-main mb-4 leading-snug drop-shadow-[3px_3px_0_var(--color-gray-4)]"
      >
        Blog &amp; Artikel
      </h1>
      <p class="font-pixel-body text-gray-1 text-xs sm:text-sm leading-relaxed max-w-2xl">
        Catatan rilis terbaru, panduan teknis, dan cerita di balik pengembangan
        bahasa pemrograman Dr Lang.
      </p>
    </header>

    <!-- ARTIKEL UTAMA (FEATURED POST) -->
    {#if featuredPost}
      <article
        class="p-6 sm:p-8 bg-main text-white-light-1 border-4 border-main-3 pixel-box-light space-y-5"
      >
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 bg-white-light-2 text-main font-pixel-title text-[9px] uppercase">
              FEATURED
            </span>
            <span class="px-2.5 py-1 bg-main-2 text-gray-4 border border-main-3 font-pixel-title text-[9px] uppercase">
              {featuredPost.tag}
            </span>
          </div>
          <span class="font-mono text-xs text-gray-3">
            {featuredPost.date} • {featuredPost.readTime}
          </span>
        </div>

        <h2 class="font-pixel-title text-base sm:text-xl text-white-light-2 leading-relaxed">
          {featuredPost.title}
        </h2>

        <p class="font-pixel-body text-xs sm:text-sm text-gray-3 leading-relaxed max-w-3xl">
          {featuredPost.excerpt}
        </p>

        <div class="pt-2 flex flex-wrap items-center justify-between gap-4 border-t-2 border-main-2">
          <span class="font-pixel-body text-xs text-gray-2">
            Oleh: <strong class="text-white-light-1">{featuredPost.author}</strong>
          </span>

          <a
            href="/blog/{featuredPost.slug}"
            class="font-pixel-title px-5 py-3 text-[10px] uppercase bg-white-light-2 text-main border-2 border-main pixel-btn"
          >
            Baca Selengkapnya &gt;
          </a>
        </div>
      </article>
    {/if}

    <!-- FILTER TAG & PENCARIAN -->
    <section
      class="p-4 sm:p-5 bg-white-light-3 border-4 border-main-3 pixel-box flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
    >
      <div class="flex flex-wrap gap-2">
        {#each ['Semua', 'Rilis', 'Tutorial', 'Performa'] as tag (tag)}
          <button
            onclick={() => (selectedTag = tag as Tag)}
            class="font-pixel-title px-3.5 py-2 text-[10px] uppercase cursor-pointer transition-none
              {selectedTag === tag
                ? 'bg-main text-white-light-2 border-2 border-main shadow-[3px_3px_0_0_var(--color-gray-1)]'
                : 'bg-white-light-2 text-main-2 hover:bg-white-light-1 border-2 border-main-3'}"
          >
            {tag}
          </button>
        {/each}
      </div>

      <div class="w-full md:w-64">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Cari artikel..."
          class="pixel-input w-full px-3.5 py-2 bg-white-light-2 text-main font-pixel-body text-xs placeholder:text-gray-2 focus:bg-white-light-3"
        />
      </div>
    </section>

    <!-- GRID DAFTAR ARTIKEL -->
    {#if filteredPosts.length === 0}
      <div class="p-10 bg-white-light-3 border-4 border-main-3 pixel-box text-center space-y-2">
        <p class="font-pixel-title text-xs text-main-1">Artikel Tidak Ditemukan</p>
        <p class="font-pixel-body text-xs text-gray-1">
          Coba gunakan kata kunci pencarian lain atau pilih tag "Semua".
        </p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each filteredPosts as post (post.slug)}
          <article
            class="p-6 bg-white-light-3 border-4 border-main-3 pixel-box flex flex-col justify-between gap-5 hover:border-main transition-none"
          >
            <div class="space-y-3">
              <!-- Tag & Tanggal -->
              <div class="flex items-center justify-between gap-2">
                <span
                  class="px-2.5 py-1 bg-main text-white-light-2 font-pixel-title text-[9px] uppercase border-2 border-main-3"
                >
                  {post.tag}
                </span>
                <span class="font-mono text-xs text-gray-1">
                  {post.date}
                </span>
              </div>

              <!-- Judul Artikel -->
              <h3 class="font-pixel-title text-sm text-main-1 leading-snug">
                <a href="/blog/{post.slug}" class="hover:underline">
                  {post.title}
                </a>
              </h3>

              <!-- Ringkasan -->
              <p class="font-pixel-body text-xs text-main-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <!-- Footer Kartu -->
            <div class="pt-4 border-t-2 border-white-light-1 flex items-center justify-between gap-2">
              <span class="font-mono text-[11px] text-gray-1">
                {post.readTime}
              </span>

              <a
                href="/blog/{post.slug}"
                class="font-pixel-title px-3 py-2 text-[9px] uppercase bg-white-light-2 text-main border-2 border-main hover:bg-main hover:text-white-light-2 transition-none"
              >
                Baca &gt;
              </a>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</div>
