import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getProviderDetails } from '@/lib/missionUtils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import AttemptMarker from '../AttemptMarker';

type Props = {
  item: Mission;
  type: 'launches' | 'landings';
};

const ProviderRecordCard = ({ item, type }: Props) => {
  const provider = getProviderDetails(item.launch_service_provider);
  const preHeading = type == 'launches' ? 'Launch Record' : 'Landing Record';
  const heading = type == 'launches' ? provider.launchCount : provider.landingCount;

  const calculatePercent = (count: number, total: number) => Math.round((count / total) * 100);

  const failedLaunches = calculatePercent(provider.launchFailedCount, provider.launchCount);
  const consecutiveLaunches = calculatePercent(provider.launchConsecutiveCount, provider.launchCount);
  const successfulLaunches = calculatePercent(provider.launchSuccessCount, provider.launchCount);
  const failedLandings = calculatePercent(provider.landingFailedCount, provider.landingCount);
  const consecutiveLandings = calculatePercent(provider.landingCount, provider.landingCount);
  const successfulLandings = calculatePercent(provider.landingSuccessCount, provider.landingCount);

  const data = [
    {
      status: 'danger',
      progress: type == 'launches' ? failedLaunches : failedLandings
    },
    {
      status: 'accent',
      progress: type == 'launches' ? consecutiveLaunches : consecutiveLandings
    },
    {
      status: 'success',
      progress: type == 'launches' ? successfulLaunches : successfulLandings
    }
  ];

  const hoverContent = (
    <HoverCardContent>
      <h4 className="heading-sm pb-2">{type == 'launches' ? provider.launchCount : provider.landingCount} total attempts</h4>
      <ul className="flex flex-col">
        <li className="flex gap-2 items-center">
          <AttemptMarker variant={'danger'} />
          <p>{type == 'launches' ? provider.launchFailedCount : provider.landingFailedCount} Failed</p>
        </li>
        <li className="flex gap-2 items-center">
          <AttemptMarker variant={'accent'} />
          <p>{type == 'launches' ? provider.launchConsecutiveCount : provider.landingConsecutiveCount} Consecutive successful</p>
        </li>
        <li className="flex gap-2 items-center">
          <AttemptMarker variant={'success'} />
          <p>
            {type == 'launches'
              ? provider.launchSuccessCount - provider.launchConsecutiveCount
              : provider.landingSuccessCount - provider.landingConsecutiveCount}{' '}
            Successful
          </p>
        </li>
      </ul>
    </HoverCardContent>
  );

  return (
    <Card>
      <CardHeader
        preHeading={preHeading}
        heading={heading > 0 ? heading : 'No Known Attempts'}
      />
      <HoverCard>
        <HoverCardTrigger>
          <CardContent className="flex-1 flex flex-col gap-2">
            {data.map((e, i) => (
              <div
                key={i}
                className={`bg-${e.status} h-3 rounded-full`}
              >
                {e.progress > 0 && (
                  <div
                    className={`bg-${e.status}-foreground h-full rounded-full`}
                    style={{ width: `${e.progress}%` }}
                  ></div>
                )}
              </div>
            ))}
          </CardContent>
        </HoverCardTrigger>
        {hoverContent}
      </HoverCard>
    </Card>
  );
};

export default ProviderRecordCard;
