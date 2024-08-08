import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getVehicleDetails } from '@/lib/missionUtils';
import { Badge } from '../ui/badge';
import Icon from '../Icon';

const VehicleStatCard = ({ item }: Item) => {
  const vehicle = getVehicleDetails(item.rocket);

  const vehicleStats = [
    { label: 'Length', value: vehicle.length },
    { label: 'Diameter', value: vehicle.diameter },
    { label: 'Launch Mass', value: vehicle.launchMass },
    { label: 'LEO Capacity', value: vehicle.capacityLeo },
    { label: 'GTO Capacity', value: vehicle.capacityGto },
    { label: 'Thrust', value: vehicle.thrustTo }
  ];

  return (
    <Card
      className="col-span-1"
      variant="tall"
    >
      <CardHeader heading="Vehicle Details">
        {/* <Badge variant={'learnMore'}>
          <Icon
            name="plus"
            size="small"
            fill="purple"
          />
          More
        </Badge> */}
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="grid grid-cols-2 gap-2 h-full">
          {vehicleStats.map((stat, i) =>
            stat.value ? (
              <li
                key={i}
                className="col-span-1 border rounded-md p-4 flex flex-col items-center justify-center gap-1 last-grid-item-odd"
              >
                <h4 className="heading-sm">{stat.label}</h4>
                <h5 className="heading-lg leading-none">{stat.value}</h5>
              </li>
            ) : null
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default VehicleStatCard;
