<script>
  export let data
  const {links} = data
  console.log("links", links)
</script>


<h1>Welcome to SpaceX Project</h1>

<h2>Launches</h2>

Wikpedia: <a href={links.wikipedia}>Latest launch</a>
