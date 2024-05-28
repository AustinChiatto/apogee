'use client';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { Mission } from '@/types/missionProps';
import { H3, Text } from './Typography';
import { getStatusClass, translateDate } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

type StatCards = {
  label: string;
  stat: string;
  icon?: string;
};

const MissionDisplay: React.FC<{ items: { upcoming: Mission[]; previous: Mission[] } }> = ({
  items
}) => {
  const { selectedMissionId } = useSelectedMission();
  const { upcoming, previous } = items;
  const item =
    upcoming.find((mission) => mission.id === selectedMissionId) ||
    previous.find((mission) => mission.id === selectedMissionId);

  const overviewStats: StatCards[] = [
    { label: 'Launch Status', stat: item?.status?.name ?? 'Unknown' },
    { label: 'Destination', stat: item?.mission.orbit.name ?? 'Unknown' },
    { label: 'Mission Type', stat: item?.mission?.type ?? 'Unknown' }
  ];

  return (
    <>
      <div className="sticky top-0 left-0 right-0 flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          {item?.status.id && (
            <div className={`w-2 h-2 rounded-full ${getStatusClass(item?.status.id)}`}></div>
          )}
          <H3>{item?.mission.name ?? 'NAME NULL'}</H3>
        </div>
        <div className="bg-foreground text-background px-2 rounded">
          {item?.net ? translateDate(item.net) : 'TBC'}
        </div>
      </div>
      <div className="flex-1 p-4 pt-0 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="relative overflow-hidden rounded-2xl">
            {item?.image && (
              <figure className="relative max-w-full h-auto aspect-[3/2] max-h-[50rem] rounded-2xl overflow-hidden border">
                <Image
                  src={item?.image}
                  alt="todo:"
                  sizes="5vw"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </figure>
            )}
            <div className="absolute right-0 left-0 bottom-0 p-4 grid grid-cols-3 gap-4">
              {overviewStats.map((e, i) => (
                <Card
                  className="border-none shadow-sm bg-primary"
                  key={i}
                >
                  <CardHeader>
                    <CardTitle className="text-sm font-medium leading-none text-muted">
                      {e.label}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary-foreground block">{e.stat}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className="max-w-[112ch] text-pretty">
            <Text>{item?.mission.description ?? 'DESCRIPTION UNKNOWN'}</Text>
          </div>
        </div>
        <div className="col-span-1 border p-4">cards</div>
      </div>
    </>
  );
};

export default MissionDisplay;
