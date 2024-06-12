import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getVehicleDetails } from '@/lib/missionUtils';
import { Badge } from '../ui/badge';
import VehicleRecordCard from '../cards/VehicleRecordCard';
import VehicleStatCard from '../cards/VehicleStatCard';
import Icon from '../Icon';

type VehicleDisplayContent = {
  item: Mission;
};

const VehicleDisplayContent = ({ item }: VehicleDisplayContent) => {
  const vehicle = getVehicleDetails(item.rocket);

  const vehicleConfig = [
    { label: 'Family', value: vehicle.family },
    { label: 'Name', value: vehicle.name },
    { label: 'Variant', value: vehicle.variant }
  ];

  return (
    <>
      <Card variant="sectionLabel">
        <CardHeader
          preHeading="Launch Vehicle"
          heading={`${vehicle.fullName}`}
          isTitle
        />
      </Card>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 h-max flex flex-col gap-2">
          {/* Vehicle Configuration */}
          <Card className="gap-8 pb-[1.125rem]">
            <CardHeader preHeading="Configuration">
              {vehicle.reusable && (
                <Badge variant={'feature'}>
                  <Icon
                    name="recycle"
                    fill="orange"
                    size="small"
                  />
                  Reusable
                </Badge>
              )}
            </CardHeader>
            <CardContent>
              <ul className="flex gap-6">
                {vehicleConfig.map((e, i) =>
                  e.value ? (
                    <li
                      key={i}
                      className="flex flex-col gap-1"
                    >
                      <h4 className="heading-sm">{e.label}</h4>
                      <h5 className="heading-lg">{e.value}</h5>
                    </li>
                  ) : null
                )}
              </ul>
            </CardContent>
          </Card>
          <VehicleRecordCard
            item={item}
            type="launches"
          />
          <VehicleRecordCard
            item={item}
            type="landings"
          />
        </div>
        <VehicleStatCard item={item} />
      </div>
    </>
  );
};

export default VehicleDisplayContent;
