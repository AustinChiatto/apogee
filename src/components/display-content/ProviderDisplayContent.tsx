import { Mission } from '@/types/missionProps';
import { Card, CardHeader } from '../Card';
import { getProviderDetails } from '@/lib/missionUtils';
import ProviderDetailsCard from '../cards/ProviderDetailsCard';
import ProviderRecordCard from '../cards/ProviderRecordCard';

type ProviderDisplayContent = {
  item: Mission;
};

const ProviderDisplayContent = ({ item }: ProviderDisplayContent) => {
  const provider = getProviderDetails(item.launch_service_provider);

  return (
    <>
      <Card variant="sectionLabel">
        <CardHeader
          preHeading="Launch Service Provider"
          heading={`${provider.name}`}
          isTitle
        />
      </Card>
      <div className="grid grid-cols-2 gap-2">
        <ProviderDetailsCard item={item} />
        {/* Provider Image */}
        <div className="col-span-1 flex gap-2">
          <ProviderRecordCard
            item={item}
            type="launches"
          />
          <ProviderRecordCard
            item={item}
            type="landings"
          />
        </div>
      </div>
    </>
  );
};

export default ProviderDisplayContent;
