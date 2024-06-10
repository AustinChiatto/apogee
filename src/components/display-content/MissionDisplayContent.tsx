import { Item } from '@/types/missionProps';
import { Card, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';
import MissionMediaCard from '../cards/MissionMediaCard';
import MissionCountdownCard from '../cards/MissionCountdownCard';
import MissionDestinationCard from '../cards/MissionDestinationCard';
import MissionLaunchPadCard from '../cards/MissionLaunchPadCard';
import ProviderContributionCard from '../cards/ProviderContributionCard';
import MissionProgramCard from '../cards/MissionProgramCard';

const MissionDisplayContent = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  return (
    <>
      <MissionMediaCard item={item} />
      <div className="flex gap-2">
        <MissionCountdownCard item={item} />
        <ProviderContributionCard item={item} />
      </div>
      <Card variant="sectionLabel">
        <CardHeader
          preHeading="Mission Details"
          heading={`${mission.name}`}
          isTitle
        />
      </Card>
      <div className="grid grid-cols-2 gap-2">
        <MissionLaunchPadCard item={item} />
        <div className="col-span-1 flex flex-col gap-2">
          <MissionProgramCard item={item} />
          <MissionDestinationCard item={item} />
        </div>
      </div>
    </>
  );
};

export default MissionDisplayContent;
