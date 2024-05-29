'use client';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { Mission } from '@/types/missionProps';
import { H2, H3, Text } from './Typography';
import { getStatusClass, translateDate } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { LaunchCountdownCard, LaunchRecordCard } from './Cards';

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

  return (
    <>
      <ScrollArea className="h-full pr-4">
        <div className="max-w-[69rem] mx-auto">
          <div className="sticky top-0 left-0 right-0 flex items-center justify-between h-[4.5rem] z-10 bg-background">
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
          <div className="flex-1 pb-4 pt-0 flex flex-col gap-4">
            <div className="overflow-hidden rounded-3xl">
              {item?.image && (
                <figure className="relative max-w-full w-full h-auto aspect-[3/2] rounded-3xl overflow-hidden border">
                  <Image
                    src={item?.image}
                    alt="todo:"
                    sizes="50vw"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </figure>
              )}
            </div>
            <div className="w-full flex gap-4">
              <LaunchCountdownCard
                time="2D 18:32:08"
                badge={`${item?.status.name}`}
              />
              <LaunchRecordCard
                provider={`${item?.launch_service_provider.name}`}
                providerCount={item?.agency_launch_attempt_count_year ?? 0}
                totalCount={item?.orbital_launch_attempt_count_year ?? 0}
                statusId={item?.status.id ?? 2}
              />
            </div>
            <div className="text-pretty">
              <section className="pt-12">
                <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {item?.mission.name}
                </h2>
                <p className="max-w-[75ch] leading-7 [&:not(:first-child)]:mt-6">
                  {item?.mission.description ?? 'DESCRIPTION UNKNOWN'}
                </p>
                <article className="rounded-2xl bg-[black] flex-1 p-[1.125rem] flex flex-col justify-between my-6 mb-4">
                  <header className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium leading-none text-secondary">
                        Destination
                      </h3>
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                        {item?.mission.orbit.name} &middot; {item?.mission.orbit.abbrev}
                      </h4>
                    </div>
                  </header>
                  <section className="w-full"></section>
                </article>
                <article className="rounded-2xl bg-[black] flex-1 p-[1.125rem] flex flex-col justify-between my-6 mt-4">
                  <header className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium leading-none text-secondary">Type</h3>
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
                        {item?.mission.type}
                      </h4>
                    </div>
                  </header>
                  <section className="w-full"></section>
                </article>
              </section>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default MissionDisplay;
