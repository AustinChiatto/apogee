'use client';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { Mission } from '@/types/missionProps';
import { H3 } from './Typography';
import { getStatusClass, translateDate } from '@/lib/utils';
import Image from 'next/image';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardContent, CardHeader } from './Cards';
import { Badge } from './ui/badge';

const MissionDisplay: React.FC<{ items: { upcoming: Mission[]; previous: Mission[] } }> = ({
  items
}) => {
  const { selectedMissionId } = useSelectedMission();
  const { upcoming, previous } = items;
  const item =
    upcoming.find((mission) => mission.id === selectedMissionId) ||
    previous.find((mission) => mission.id === selectedMissionId);

  return (
    <>
      <ScrollArea className="h-full pr-4">
        <div className="max-w-[69rem] mx-auto pb-[25rem]">
          <div className="sticky top-0 left-0 right-0 flex items-center justify-between h-[4.5rem] z-10 bg-background">
            <div className="flex items-center gap-4">
              {item?.status.id && (
                <div
                  className={`w-2 h-2 rounded-full bg-${getStatusClass(
                    item?.status.id
                  )}-foreground`}
                ></div>
              )}
              <H3>{item?.mission.name ?? 'NAME NULL'}</H3>
            </div>
            <div className="bg-foreground text-background px-2 rounded">
              {item?.net ? translateDate(item.net) : 'TBC'}
            </div>
          </div>
          <div className="flex-1 pb-4 pt-0 flex flex-col gap-2">
            {item?.image && (
              <figure className="relative max-w-full w-full h-auto aspect-video rounded-3xl overflow-hidden border">
                <Image
                  src={item?.image ?? '/image-placeholder.jpg'}
                  alt="todo:"
                  sizes="75vw"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </figure>
            )}
            <div className="flex gap-2">
              <Card>
                <CardHeader
                  preHeading="Launch Countdown"
                  heading="2D 18:32:08"
                >
                  <Badge variant={`${getStatusClass(item?.status.id ?? 0)}`}>
                    {item?.status.name}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-muted rounded-full">
                    <div
                      className={`rounded-full w-2/3 h-4 bg-${getStatusClass(
                        item?.status.id ?? 0
                      )}-gradient`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader
                  preHeading="2024 Launch Record"
                  heading="SpaceX"
                ></CardHeader>
                <CardContent></CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default MissionDisplay;
