<script lang="ts">
  import Index from "./pages/index.svelte";

  import Default from "./pages/default.svelte";
  import Docs from "./pages/docs.svelte";
  import { pagesName, type pageLink } from "./lib/type/pagesLink";
  import Header from "./lib/components/header.svelte";
  import Install from "./pages/install.svelte";
  import Blog from "./pages/blog.svelte";
  import StdMethod from "./pages/stdMethod.svelte";
  import { pagesLinks } from "./lib/data/header";
  import { onMount } from "svelte";
  import Loading from "./pages/loading.svelte";

  let currPage = $state<pageLink>({ name: pagesName.Index });
  let isLoading = $state(true);
  const handleChangePage = (page: string) => {
    if (currPage?.name === page) {
      return;
    }

    const thisPage = pagesLinks.find((v) => v.name === page);

    if (!thisPage) {
      return;
    }

    currPage = {
      name: thisPage?.name,
    };
  };

  function handlePageLoad() {
    isLoading = false;
  }

  onMount(() => {
    if (document.readyState === "complete") {
      isLoading = false;
    }
  });
</script>

<!-- Mendengarkan event saat SEMUA resource (gambar, CSS, dll) selesai dimuat -->
<svelte:window on:load={handlePageLoad} />

<Header {handleChangePage} />

<!-- onePage : menentukan halaman utama yang reliad -->
<!-- <svelte:component this={daftarPages[currPage.name]} /> -->

{#if isLoading}
  <Loading />
{:else}
  {#if currPage.name === pagesName.Index}
    <Index {handleChangePage} />
  {:else if currPage.name == pagesName.Docs}
    <Docs />
  {:else if currPage.name == pagesName.StdMethod}
    <StdMethod />
  {:else if currPage.name == pagesName.Install}
    <Install />
    <!-- ini masih lama  -->
    <!-- {:else if currPage.name == pagesName.Tools} -->
    <!--   <Tools /> -->
  {:else if currPage.name == pagesName.Blog}
    <Blog />
  {/if}

  <!-- <Default /> -->
  <!-- default halaman cuman menjalanan Default component page  -->
  <!-- <Default {handleChangePage} /> -->
{/if}
