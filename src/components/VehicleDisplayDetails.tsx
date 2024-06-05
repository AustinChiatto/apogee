import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from './Card';
import { getVehicleDetails } from '@/lib/missionUtils';

type VehicleDisplayDetails = {
  item: Mission;
};

const VehicleDisplayDetails = ({ item }: VehicleDisplayDetails) => {
  const vehicle = getVehicleDetails(item.rocket);

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
            <CardHeader preHeading="Configuration" />
            <CardContent className="flex gap-6">
              {vehicle.family && (
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-medium leading-none text-secondary">Family</h4>
                  <h5 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {vehicle.family}
                  </h5>
                </div>
              )}
              {vehicle.name && (
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-medium leading-none text-secondary">Name</h4>
                  <h5 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {vehicle.name}
                  </h5>
                </div>
              )}
              {vehicle.variant && (
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-medium leading-none text-secondary">Variant</h4>
                  <h5 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {vehicle.variant}
                  </h5>
                </div>
              )}
            </CardContent>
          </Card>
          {/* Vehicle Launch Attempts */}
          <Card>
            <CardHeader
              preHeading={`${vehicle.name} Launches`}
              heading="285"
            />
            <CardContent className="pt-6">
              <div className="flex justify-between w-full bg-muted rounded-full">
                <div className={`rounded-full w-1/4 h-4 bg-danger-gradient`}></div>
                <div className={`rounded-full w-2/3 h-4 bg-blue-gradient`}></div>
              </div>
            </CardContent>
          </Card>
          {/* Vehicle Landing Attempts */}
          <Card>
            <CardHeader
              preHeading={`${vehicle.name} Landings`}
              heading="285"
            />
            <CardContent className="pt-6">
              <div className="flex justify-between w-full bg-muted rounded-full">
                <div className={`rounded-full w-8 h-4 bg-danger-gradient`}></div>
                <div className={`rounded-full w-1/3 h-4 bg-blue-gradient`}></div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Vehicle Stats */}
        <Card>
          <CardHeader />
        </Card>
      </div>
    </>
  );
};

export default VehicleDisplayDetails;
