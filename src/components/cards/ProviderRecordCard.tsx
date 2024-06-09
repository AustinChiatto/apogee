import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getProviderDetails } from '@/lib/missionUtils';

type Props = {
  item: Mission;
  type: 'launches' | 'landings';
};

const ProviderRecordCard = ({ item, type }: Props) => {
  const provider = getProviderDetails(item.launch_service_provider);

  const launchesFailedPercent = Math.round(
    (provider.launchFailedCount / provider.launchCount) * 100
  );
  const landingsFailedPercent = Math.round(
    (provider.landingFailedCount / provider.landingCount) * 100
  );

  const launchesSuccessPercent = Math.round(
    (provider.launchSuccessCount / provider.launchCount) * 100
  );
  const landingsSuccessPercent = Math.round(
    (provider.landingSuccessCount / provider.landingCount) * 100
  );

  const preHeading = type == 'launches' ? 'Launch Record' : 'Landing Record';

  const launches = provider.launchCount > 0 && (
    <>
      <div
        className="bg-success-foreground cursor-pointer"
        style={{ height: `${launchesSuccessPercent}%` }}
      ></div>
      <div
        className="bg-danger-foreground cursor-pointer"
        style={{ height: `${launchesFailedPercent}%` }}
      ></div>
    </>
  );

  const landings = provider.landingCount > 0 && (
    <>
      <div
        className="bg-success-foreground cursor-pointer"
        style={{ height: `${landingsSuccessPercent}%` }}
      ></div>
      <div
        className="bg-danger-foreground cursor-pointer"
        style={{ height: `${landingsFailedPercent}%` }}
      ></div>
    </>
  );

  return (
    <Card>
      <CardHeader
        preHeading={preHeading}
        heading={`${provider.launchCount}`}
      />
      <CardContent className="flex-1">
        <div className="w-full h-full flex flex-col bg-muted/20 rounded-md overflow-hidden">
          {type == 'launches' ? launches : landings}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderRecordCard;
