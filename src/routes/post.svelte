<script lang="ts">
  import { goto } from "@sapper/app";
  let name = null;
  let lineage = null;
  const postToExpress = () => {
    console.log("postToExpress!");
    const bodyRequest = {
        name,
        lineage
    }
    console.log(`BODY REQUEST IN SVELETE =========>${JSON.stringify(bodyRequest)}`);
    const request = fetch("api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRequest)
    });
    if (request.ok) {
      console.log("Data send!");
      name="";
      lineage="";
      goto("/get");
    }
  };
</script>

<svelte:head>
  <title>Post</title>
</svelte:head>
<h1>Post page</h1>

<button on:click={postToExpress}>Post</button>

<form>
  <input type="text" bind:value={name} placeholder="Name" />
  <input type="text" bind:value={lineage} placeholder="Lineage" />
  <button on:click|preventDefault={postToExpress}>Post to Express</button>
</form>
