/** @type {import('./$types').PageLoad} */

export const load = async ({ fetch }) => {
	const fetchSpaceXData = async () => {
		const spaceXDataResponse = await fetch('https://api.spacexdata.com/v5/launches/latest');

		const spaceXData = await spaceXDataResponse.json();

		const { crew, payloads } = spaceXData;

		const crewData = await fetchCrewData({ crew });

    const payloadData = await fetchPayLoadData(payloads)

		return { spaceXData, crewData, payloadData };
	};

  const fetchPayLoadData = async (payloads) => {
    const payloadData = await Promise.all(
      payloads.map(async (payload) => {
        return await fetch(`https://api.spacexdata.com/v4/payloads/${payload}`).then((response) =>
          response.json()
        );
      })
    );

    return payloadData;
  }

	const fetchCrewData = async ({ crew }) => {
		const crewData = await Promise.all(
			crew.map(async ({ crew: id, role }) => {
				return {
					role: role,
					data: await fetch(`https://api.spacexdata.com/v4/crew/${id}`).then((response) =>
						response.json()
					)
				};
			})
		);

		return crewData;
	};

	return {
		allData: fetchSpaceXData()
	};
};
