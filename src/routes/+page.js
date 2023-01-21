export const load = async ({ fetch }) => {
	const apiRes = await fetch('https://api.spacexdata.com/v5/launches/latest');

	const apiData = await apiRes.json();

	return	apiData
};
