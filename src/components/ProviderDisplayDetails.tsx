import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from './Card';
import { getProviderDetails } from '@/lib/missionUtils';

type ProviderDisplayDetails = {
  item: Mission;
};

const ProviderDisplayDetails = ({ item }: ProviderDisplayDetails) => {
  const provider = getProviderDetails(item.launch_service_provider);

  return (
    <>
      <Card
        variant="wide"
        className="py-6"
      >
        <CardHeader
          preHeading="Mission Name"
          heading={`${provider.name}`}
        />
      </Card>
      <div className="flex gap-2">
        {/* Provider Breakdown */}
        <Card className="">
          <CardHeader />
        </Card>
        <div className="flex-1 flex flex-col gap-2">
          {/* Provider Launch Attempts */}
          <Card>
            <CardHeader
              preHeading={`${provider.name} Launches`}
              heading="285"
            />
            <CardContent className="pt-6">
              <div className="flex justify-between w-full bg-muted rounded-full">
                <div className={`rounded-full w-1/4 h-4 bg-danger-gradient`}></div>
                <div className={`rounded-full w-2/3 h-4 bg-blue-gradient`}></div>
              </div>
            </CardContent>
          </Card>
          {/* Provider Landing Attempts */}
          <Card>
            <CardHeader
              preHeading={`${provider.name} Landings`}
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
      </div>
    </>
  );
};

export default ProviderDisplayDetails;
