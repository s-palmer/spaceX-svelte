<script>
	export let data;
	const { allData } = data;
	console.log('allData', allData);
	const { spaceXData, crewData } = allData;
	const { links, flight_number, name } = spaceXData;
	const launchDate = new Date(spaceXData.date_utc).toLocaleString('en-GB', { timeZone: 'UTC' });
	const src = links.patch.small;

</script>

<h1>Welcome to SpaceX Svelte Edition</h1>

<h2>Latest Launch: {name}</h2>

<h3>Launch Number: {flight_number}</h3>

<img {src} alt="patch for spaceX flight: {flight_number}" />

<p>Launch Date: {launchDate}</p>

{#each crewData as crewMember}
	<h4>{crewMember.role}: {crewMember.data.name}</h4>
	<p>Agency: {crewMember.data.agency}</p>
{/each}

Wikipedia Link: <a href={links.wikipedia}>Launch {flight_number}</a>

YouTube Link:
<a href="https://www.youtube.com/watch?v={links.youtube_id}">Youtube: Launch {flight_number}</a>
