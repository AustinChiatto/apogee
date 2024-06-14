'use client';
import { Item } from '@/types/missionProps';
import { Card, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const MissionLaunchPadCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false
      }),
    []
  );

  return (
    <div className="relative rounded-lg col-span-1 min-h-[24rem] overflow-hidden border border-[0.375rem] border-card">
      <div className="h-full w-full bg-card overflow-hidden">
        <Map
          lat={Number(mission.padLatitude)}
          long={Number(mission.padLongitude)}
        />
      </div>
      <Card className="rounded-md absolute bottom-4 left-4 right-4 h-fit min-h-[unset] z-10">
        <CardHeader
          preHeading={`${mission.locationName}`}
          heading={`${mission.padName}`}
        />
      </Card>
    </div>
  );
};

export default MissionLaunchPadCard;
