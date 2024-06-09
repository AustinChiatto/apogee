import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails, getProviderDetails } from '@/lib/missionUtils';
import { getSafeName, getStatusType } from '@/lib/utils';

const ProviderContributionCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);
  const provider = getProviderDetails(item.launch_service_provider);
  const statusFgColor = `${getStatusType(mission.statusId)}-foreground`;
  // attempts
  const currentAttempt = 1;
  const agencyAttempt = mission.attemptsYear;
  const totalAttemptsCount = mission.orbitalCountYear;
  const nonAgencyAttempts = totalAttemptsCount - agencyAttempt;
  const remainingAgencyAttempts = Math.max(0, agencyAttempt - currentAttempt);
  const agencyAttempts = Array.from({ length: remainingAgencyAttempts });
  const totalAttempts = Array.from({ length: nonAgencyAttempts });

  return (
    <Card>
      <CardHeader
        preHeading="Orbital Launch Contributions"
        heading={`${getSafeName({
          nameLong: provider.name,
          nameShort: provider.abbrev,
          maxLength: 15
        })}`}
      ></CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-[1px]">
          {totalAttempts.map((_, i) => (
            <span
              key={i}
              className="inline-block w-4 h-2 bg-muted rounded-full"
            ></span>
          ))}
          {agencyAttempts.map((_, i) => (
            <span
              key={i}
              className="inline-block w-4 h-2 bg-secondary rounded-full"
            ></span>
          ))}
          <span className={`inline-block w-4 h-2 rounded-full bg-${statusFgColor}`}></span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderContributionCard;
