'use client';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { Mission } from '@/types/missionProps';
import { H3 } from './Typography';
import { getStatusType, translateDate } from '@/lib/utils';
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

  const bgStatus = `bg-${getStatusType(item?.status.id ?? 0)}-gradient`;

  const currentAttempt = 1;
  const agencyAttempt = item?.agency_launch_attempt_count_year ?? 0;
  const totalAttemptsCount = item?.orbital_launch_attempt_count_year ?? 0;

  const nonAgencyAttempts = totalAttemptsCount - agencyAttempt;
  const remainingAgencyAttempts = Math.max(0, agencyAttempt - currentAttempt);

  const agencyAttempts = Array.from({ length: remainingAgencyAttempts });
  const totalAttempts = Array.from({ length: nonAgencyAttempts });

  return (
    <>
      <ScrollArea className="h-full pr-4">
        <div className="max-w-[69rem] mx-auto pb-[25rem]">
          <div className="sticky top-0 left-0 right-0 flex items-center justify-between h-[4.5rem] z-10 bg-background">
            <div className="flex items-center gap-4">
              <div className={`w-2 h-2 rounded-full ${bgStatus}`}></div>
              <H3>{item?.mission.name ?? 'NAME NULL'}</H3>
            </div>
            <div className="bg-foreground text-background px-2 rounded">
              {item?.net ? translateDate(item.net) : 'TBC'}
            </div>
          </div>
          <div className="flex-1 pb-4 pt-0 flex flex-col gap-8">
            <section className="flex flex-col gap-2">
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
                    <Badge variant={`${getStatusType(item?.status.id ?? 0)}`}>
                      {item?.status.name}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-muted rounded-full">
                      <div className={`rounded-full w-2/3 h-4 ${bgStatus}`}></div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader
                    preHeading="2024 Launch Record"
                    heading="SpaceX"
                  ></CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {totalAttempts.map((_, i) => (
                        <span
                          key={i}
                          className="inline-block w-2 h-2 bg-muted rounded-full"
                        ></span>
                      ))}
                      {agencyAttempts.map((_, i) => (
                        <span
                          key={i}
                          className="inline-block w-2 h-2 bg-secondary rounded-full"
                        ></span>
                      ))}
                      <span className={`inline-block w-2 h-2 rounded-full ${bgStatus}`}></span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            {/* Mission Details */}
            <section className="flex flex-col gap-2">
              <Card variant="wide">
                <CardHeader
                  preHeading="Mission Name"
                  heading={`${item?.mission.name}`}
                />
              </Card>
              <div className="flex gap-2">
                <Card className="aspect-[1.5/1]">
                  <CardHeader
                    preHeading={`${item?.pad.location.name}`}
                    heading={`${item?.pad.name}`}
                  />
                </Card>
                <div className="flex-1 flex flex-col gap-2">
                  <Card>
                    <CardHeader preHeading="Destination" />
                    <CardContent>
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {item?.mission.orbit.name}
                      </h4>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader preHeading="Mission Type" />
                    <CardContent>
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {item?.mission.type}
                      </h4>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            {/* Vehicle Details */}
            <section className="flex flex-col gap-2">
              <Card variant="wide">
                <CardHeader
                  preHeading="Mission Name"
                  heading={`${item?.rocket.configuration.full_name}`}
                />
              </Card>
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col gap-2">
                  {/* Vehicle Configuration */}
                  <Card>
                    <CardHeader preHeading="Configuration" />
                    <CardContent>family</CardContent>
                  </Card>
                  {/* Vehicle Launch Attempts */}
                  <Card>
                    <CardHeader
                      preHeading={`${item?.rocket.configuration.name} Launch Attempts`}
                      heading="285"
                    />
                    <CardContent>...</CardContent>
                  </Card>
                  {/* Vehicle Landing Attempts */}
                  <Card>
                    <CardHeader
                      preHeading={`${item?.rocket.configuration.name} Landing Attempts`}
                      heading="285"
                    />
                    <CardContent>...</CardContent>
                  </Card>
                </div>
                {/* Vehicle Stats */}
                <Card>
                  <CardHeader />
                </Card>
              </div>
            </section>
            {/* Provider Details */}
            <section className="flex flex-col gap-2">
              <Card variant="wide">
                <CardHeader
                  preHeading="Mission Name"
                  heading={`${item?.launch_service_provider.name}`}
                />
              </Card>
              <div className="flex gap-2">
                {/* Provider Breakdown */}
                <Card className="aspect-[1.5/1]">
                  <CardHeader />
                </Card>
                <div className="flex-1 flex flex-col gap-2">
                  {/* Provider Launch Attempts */}
                  <Card>
                    <CardHeader
                      preHeading={`${item?.launch_service_provider.name} Launch Attempts`}
                      heading="342"
                    />
                    <CardContent>...</CardContent>
                  </Card>
                  {/* Provider Landing Attempts */}
                  <Card>
                    <CardHeader
                      preHeading={`${item?.launch_service_provider.name} Landing Attempts`}
                      heading="368"
                    />
                    <CardContent>...</CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default MissionDisplay;
