import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails, getProviderDetails } from '@/lib/missionUtils';
import { createArray, getSafeName, getStatusType } from '@/lib/utils';
import AttemptMarker from '../AttemptMarker';
import { Badge } from '../ui/badge';

const ProviderContributionCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);
  const provider = getProviderDetails(item.launch_service_provider);
  // attempts
  const currentAttempt = 1;
  const totalAttemptsCount = mission.orbitalCountYear;
  const nonAgencyAttempts = createArray(totalAttemptsCount - mission.attemptsYear);
  const remainingAgencyAttempts = createArray(Math.max(0, mission.attemptsYear - currentAttempt));

  const getOrdinalSuffix = (number: number): string => {
    const j = number % 10;
    const k = number % 100;

    if (j === 1 && k !== 11) return `${number}st`;
    if (j === 2 && k !== 12) return `${number}nd`;
    if (j === 3 && k !== 13) return `${number}rd`;

    return `${number}th`;
  };

  return (
    <Card>
      <CardHeader
        preHeading={`${new Date().getFullYear()} Orbital Attempts`}
        heading={`${getSafeName({
          nameLong: provider.name,
          nameShort: provider.abbrev,
          maxLength: 15
        })}`}
      >
        <Badge variant={'glass'}>{getOrdinalSuffix(mission.attemptsYear)} Launch</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-[1px]">
          {nonAgencyAttempts.map((_, i) => (
            <AttemptMarker
              key={i}
              variant="muted"
            />
          ))}
          {remainingAgencyAttempts.map((_, i) => (
            <AttemptMarker
              key={i}
              variant="secondary"
            />
          ))}
          <AttemptMarker variant={getStatusType(mission.statusId)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderContributionCard;
