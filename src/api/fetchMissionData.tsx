// fetchMissionData.tsx
import { MissionResponse } from '@/types/missionProps';

const getUpcomingLaunches = async (): Promise<MissionResponse> => {
  const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/', {
    next: { revalidate: 14400 } // revalidate at most every 4 hours
  });

  if (!response.ok) {
    throw new Error('Failed to fetch launch data');
  }

  const data: MissionResponse = await response.json();
  return data;
};

export default getUpcomingLaunches;
