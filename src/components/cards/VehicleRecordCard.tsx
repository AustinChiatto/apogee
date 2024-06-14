import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getVehicleDetails } from '@/lib/missionUtils';
import { createArray } from '@/lib/utils';

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

  // todo: reduce repetition between launches & landings
  const launches = (
    <>
      {launchesFailed.map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-2 bg-danger-foreground rounded-full"
        ></span>
      ))}
      {launchesNonConsecutive.map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-2 bg-success-foreground rounded-full"
        ></span>
      ))}
      {launchesConsecutive.map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-2 bg-accent-foreground rounded-full"
        ></span>
      ))}
    </>
  );

  const landings = (
    <>
      {landingsFailed.map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-2 bg-danger-foreground rounded-full"
        ></span>
      ))}
      {landingsNonConsecutive.map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-2 bg-success-foreground rounded-full"
        ></span>
      ))}
      {landingsConsecutive.map((_, i) => (
        <span
          key={i}
          className="inline-block w-4 h-2 bg-accent-foreground rounded-full"
        ></span>
      ))}
    </>
  );

  return (
    <Card>
      <CardHeader
        preHeading={preHeading}
        heading={heading > 0 ? heading : 'No Known Attempts'}
      />
      <CardContent className="pt-6">
        <div className="flex flex-wrap gap-[1px]">{type == 'launches' ? launches : landings}</div>
      </CardContent>
    </Card>
  );
};

export default VehicleRecordCard;
