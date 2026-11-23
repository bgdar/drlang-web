<script lang="ts">
  import Index from "./pages/index.svelte";

  import Default from "./pages/default.svelte";
  import Docs from "./pages/docs.svelte";
  import { pagesName, type pageLink } from "./lib/type/pagesLink";
  import { pagesLinks } from "./lib/data/pagesLink";
  import Header from "./lib/components/header.svelte";
  import Install from "./pages/install.svelte";
  import Tools from "./pages/tools.svelte";
  import Blog from "./pages/blog.svelte";

  let currPage = $state<pageLink | null>(null);

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
</script>

<Header {handleChangePage} />

<!-- onePage : menentukan halaman utama yang reliad -->
{#if currPage}
  <!-- <svelte:component this={daftarPages[currPage.name]} /> -->

  {#if currPage.name === pagesName.Index}
    <Index {handleChangePage} />
  {:else if currPage.name == pagesName.Docs}
    <Docs />
  {:else if currPage.name == pagesName.Install}
    <Install />
    <!-- ini masih lama  -->
    <!-- {:else if currPage.name == pagesName.Tools} -->
    <!--   <Tools /> -->
  {:else if currPage.name == pagesName.Blog}
    <Blog />
  {/if}

  <!-- <Default /> -->
{:else}
  <!-- default halaman cuman menjalanan Default component page  -->
  <Default {handleChangePage} />
{/if}
