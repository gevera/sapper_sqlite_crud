<script lang="ts">
  import { onMount } from "svelte";

  let fetchedUsers = [];
  let showEdit = false;
  let obj = {
    id: null,
    name: null,
    lineage: null,
  };

  const getUsers = async () => {
    const response = await fetch("api");
    const data = await response.json();
    fetchedUsers = data.data;
  };

  const deleteUser = async (id) => {
    const response = await fetch(`api/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("user deleted!");
      getUsers();
    }
  };

  const edit = (u) => {
    showEdit = true;
    obj.id = u.id;
    obj.name = u.name;
    obj.lineage = u.lineage;
  };

  const update = async () => {
    const response = await fetch(`api/${obj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        lineage: obj.lineage,
      }),
    });
    obj.name = null;
    obj.lineage = null;
    showEdit = false;
    getUsers();
  };

  const cancel = () => {
    obj.name = null;
    obj.lineage = null;
    showEdit = false;
  };

  onMount(async () => {
    getUsers();
  });
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  h2 {
    color: #333;
    transition: 0.7s;
    opacity: 0.8;
  }
  h2:hover {
    text-decoration: underline;
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<h1>Great Compassion!</h1>

<button on:click={getUsers}>Refresh</button>

{#if fetchedUsers.length}
  <ul>
    {#each fetchedUsers as user (user.id)}
      <li>
        <h2 on:click={() => edit(user)} on:dblclick={() => deleteUser(user.id)}>
          {user.name}
          {user.lineage ? `of ${user.lineage}` : ''}
        </h2>
      </li>
    {/each}
  </ul>
{:else}
  <h4>No Users Found</h4>
{/if}

<hr />

{#if showEdit}
  <input type="text" placeholder="Name" bind:value={obj.name} />
  <input type="text" placeholder="Lineage" bind:value={obj.lineage} />
  <button on:click={update}>Update</button>
  <button on:click={cancel}>Cancel</button>
{/if}

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live
    reloading.</strong>
</p>
