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
  const launchesNonConsecutive = createArray(
    vehicle.launchSuccessCount - vehicle.launchConsecutiveCount
  );
  const launchesConsecutive = createArray(vehicle.launchConsecutiveCount);
  const launchesFailed = createArray(vehicle.launchFailedCount);
  const landingsNonConsecutive = createArray(
    vehicle.landingSuccessCount - vehicle.landingConsecutiveCount
  );
  const landingsConsecutive = createArray(vehicle.landingConsecutiveCount);
  const landingsFailed = createArray(vehicle.landingFailedCount);

  // todo: reduce repetition between launches & landings
  const launches = (
    <div className="flex flex-wrap gap-[1px]">
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
    </div>
  );

  const landings = (
    <div className="flex flex-wrap gap-[1px]">
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
    </div>
  );

  return (
    <Card>
      <CardHeader
        preHeading={`${vehicle.name} ${type}`}
        heading={`${vehicle.launchCount}`}
      />
      <CardContent className="pt-6">{type == 'launches' ? launches : landings}</CardContent>
    </Card>
  );
};

export default VehicleRecordCard;
