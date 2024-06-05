import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from './Card';
import { getVehicleDetails } from '@/lib/missionUtils';
import { Badge } from './ui/badge';
import { createArray } from '@/lib/utils';

type VehicleDisplayDetails = {
  item: Mission;
};

const VehicleDisplayDetails = ({ item }: VehicleDisplayDetails) => {
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

  const vehicleConfig = [
    { label: 'Family', value: vehicle.family },
    { label: 'Name', value: vehicle.name },
    { label: 'Variant', value: vehicle.variant }
  ];

  const vehicleStats = [
    { label: 'Length', value: vehicle.length },
    { label: 'Diameter', value: vehicle.diameter },
    { label: 'Launch Mass', value: vehicle.launchMass },
    { label: 'LEO Capacity', value: vehicle.capacityLeo },
    { label: 'GTO Capacity', value: vehicle.capacityGto },
    { label: 'Thrust', value: vehicle.thrustTo }
  ];

  return (
    <>
      <Card
        variant="wide"
        className="py-6"
      >
        <CardHeader
          preHeading="Mission Name"
          heading={`${vehicle.fullName}`}
        />
      </Card>
      <div className="flex gap-2">
        <div className="flex-1 h-max flex flex-col gap-2">
          {/* Vehicle Configuration */}
          <Card className="gap-8">
            <CardHeader preHeading="Configuration">
              {vehicle.reusable && <Badge>Reusable</Badge>}
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
          {/* Vehicle Launch Attempts */}
          <Card>
            <CardHeader
              preHeading={`${vehicle.name} Launches`}
              heading={`${vehicle.launchCount}`}
            />
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-1">
                {launchesFailed.map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-2 h-2 bg-danger-gradient rounded-full"
                  ></span>
                ))}
                {launchesNonConsecutive.map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-2 h-2 bg-muted rounded-full"
                  ></span>
                ))}
                {launchesConsecutive.map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-2 h-2 bg-blue-gradient rounded-full"
                  ></span>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Vehicle Landing Attempts */}
          {vehicle.landingCount > 0 && (
            <Card>
              <CardHeader
                preHeading={`${vehicle.name} Landings`}
                heading={`${vehicle.landingCount}`}
              />
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-1">
                  {landingsFailed.map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-2 h-2 bg-danger-gradient rounded-full"
                    ></span>
                  ))}
                  {landingsNonConsecutive.map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-2 h-2 bg-muted rounded-full"
                    ></span>
                  ))}
                  {landingsConsecutive.map((_, i) => (
                    <span
                      key={i}
                      className="inline-block w-2 h-2 bg-blue-gradient rounded-full"
                    ></span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        {/* Vehicle Stats */}
        <Card>
          <CardContent className="pt-[unset] flex-1">
            <ul className="grid grid-cols-2 gap-2 h-full">
              {vehicleStats.map((stat, i) =>
                stat.value ? (
                  <li
                    key={i}
                    className="cols-span-1 border rounded-md p-4 flex flex-col items-center justify-center gap-1 last-grid-item-odd"
                  >
                    <h4 className="heading-sm">{stat.label}</h4>
                    <h5 className="heading-lg">{stat.value}</h5>
                  </li>
                ) : null
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default VehicleDisplayDetails;
