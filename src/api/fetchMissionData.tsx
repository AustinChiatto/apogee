import { Mission } from '@/types/missionProps';

const getMissions = async (): Promise<{ upcoming: Mission[]; previous: Mission[] }> => {
  const missionSets = ['upcoming', 'previous'];

  const missionSetPromises = missionSets.map((missionSet) =>
    fetch(`https://ll.thespacedevs.com/2.2.0/launch/${missionSet}`, {
      next: { revalidate: 14400 }
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch data for ${missionSet}`);
      }
      return res.json().then((missions) => {
        if (!missions.results) throw new Error(`No results found for ${missionSet}`);
        return { [missionSet]: missions.results };
      });
    })
  );

  const [upcomingResults, previousResults] = await Promise.all(missionSetPromises);
  return {
    upcoming: upcomingResults.upcoming,
    previous: previousResults.previous
  };
};

export default getMissions;
