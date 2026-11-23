<script>
import Footer from "../lib/components/footer.svelte";
  import Index from "./index.svelte";

  const { handleChangePage } = $props();
</script>

<Index {handleChangePage} />
<Footer />
