import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getVehicleDetails } from '@/lib/missionUtils';
import { createArray } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import AttemptMarker from '../AttemptMarker';

type Props = {
  item: Mission;
  type: 'launches' | 'landings';
};

const VehicleRecordCard = ({ item, type }: Props) => {
  const vehicle = getVehicleDetails(item.rocket);
  const preHeading = `${vehicle.name} ${type}`;
  const heading = type == 'launches' ? vehicle.launchCount : vehicle.landingCount;

  const launchesNonConsecutive = createArray(vehicle.launchSuccessCount - vehicle.launchConsecutiveCount);
  const launchesConsecutive = createArray(vehicle.launchConsecutiveCount);
  const launchesFailed = createArray(vehicle.launchFailedCount);
  const landingsNonConsecutive = createArray(vehicle.landingSuccessCount - vehicle.landingConsecutiveCount);
  const landingsConsecutive = createArray(vehicle.landingConsecutiveCount);
  const landingsFailed = createArray(vehicle.landingFailedCount);

  const launches = (
    <>
      {launchesFailed.map((_, i) => (
        <AttemptMarker
          key={i}
          variant={'danger'}
        />
      ))}
      {launchesNonConsecutive.map((_, i) => (
        <AttemptMarker
          key={i}
          variant={'success'}
        />
      ))}
      {launchesConsecutive.map((_, i) => (
        <AttemptMarker
          key={i}
          variant={'accent'}
        />
      ))}
    </>
  );

  const landings = (
    <>
      {landingsFailed.map((_, i) => (
        <AttemptMarker
          key={i}
          variant={'danger'}
        />
      ))}
      {landingsNonConsecutive.map((_, i) => (
        <AttemptMarker
          key={i}
          variant={'success'}
        />
      ))}
      {landingsConsecutive.map((_, i) => (
        <AttemptMarker
          key={i}
          variant={'accent'}
        />
      ))}
    </>
  );

  const hoverContent = (
    <HoverCardContent>
      <h4 className="heading-sm pb-2">{type == 'launches' ? vehicle.launchCount : vehicle.landingCount} total attempts</h4>
      <ul className="flex flex-col">
        <li className="flex gap-2 items-center">
          <AttemptMarker variant={'danger'} />
          <p>{type == 'launches' ? vehicle.launchFailedCount : vehicle.landingFailedCount} Failed</p>
        </li>
        <li className="flex gap-2 items-center">
          <AttemptMarker variant={'success'} />
          <p>
            {type == 'launches'
              ? vehicle.launchSuccessCount - vehicle.launchConsecutiveCount
              : vehicle.landingSuccessCount - vehicle.landingConsecutiveCount}{' '}
            Successful
          </p>
        </li>
        <li className="flex gap-2 items-center">
          <AttemptMarker variant={'accent'} />
          <p>{type == 'launches' ? vehicle.launchConsecutiveCount : vehicle.landingConsecutiveCount} Consecutive successful</p>
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
      <CardContent className="pt-6">
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex flex-wrap gap-[1px]">{type == 'launches' ? launches : landings}</div>
          </HoverCardTrigger>
          {hoverContent}
        </HoverCard>
      </CardContent>
    </Card>
  );
};

export default VehicleRecordCard;
