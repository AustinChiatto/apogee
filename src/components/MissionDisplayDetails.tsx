import { Mission } from '@/types/missionProps';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from './Card';
import { Badge } from './ui/badge';
import { getStatusType } from '@/lib/utils';
import { getMissionDetails } from '@/lib/missionUtils';

type MissionDisplayDetails = {
  item: Mission;
};

const MissionDisplayDetails = ({ item }: MissionDisplayDetails) => {
  const mission = getMissionDetails(item);

  // countdown card
  const bgStatus = `bg-${getStatusType(mission.statusId)}-gradient`;

  // attempt contribution card
  const currentAttempt = 1;
  const agencyAttempt = mission.attemptsYear;
  const totalAttemptsCount = mission.orbitalCountYear;

  const nonAgencyAttempts = totalAttemptsCount - agencyAttempt;
  const remainingAgencyAttempts = Math.max(0, agencyAttempt - currentAttempt);

  const agencyAttempts = Array.from({ length: remainingAgencyAttempts });
  const totalAttempts = Array.from({ length: nonAgencyAttempts });

  return (
    <>
      {mission.image && (
        <figure className="relative max-w-full w-full h-auto aspect-video rounded-3xl overflow-hidden border">
          <Image
            src={mission.image}
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
            <Badge variant={`${getStatusType(mission.statusId)}`}>{mission.statusName}</Badge>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-full">
              <div className={`rounded-full w-2/3 h-4 ${bgStatus}`}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            preHeading="Launch Contributions"
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
      <Card
        variant="wide"
        className="mt-8 py-6"
      >
        <CardHeader
          preHeading="Mission Name"
          heading={`${mission.name}`}
        />
      </Card>
      <div className="flex gap-2">
        <Card className="aspect-[1.5/1]">
          <CardHeader
            preHeading={`${mission.locationName}`}
            heading={`${mission.padName}`}
          />
        </Card>
        <div className="flex-1 flex flex-col gap-2">
          <Card>
            <CardHeader preHeading="Destination" />
            <CardContent>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {mission.orbitName} &middot; ({mission.orbitAbbrev})
              </h4>
              <p className="font-medium leading-none text-secondary pt-1">{mission.orbitDesc}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader preHeading="Mission Type" />
            <CardContent>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{mission.type}</h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MissionDisplayDetails;
