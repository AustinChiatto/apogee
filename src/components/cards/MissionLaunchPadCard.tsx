import { Item } from '@/types/missionProps';
import { Card, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';

const MissionLaunchPadCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  return (
    <div className="relative rounded-lg col-span-1 min-h-[24rem] overflow-hidden border">
      <Card className="rounded-md absolute bottom-4 left-4 right-4 h-fit min-h-[unset]">
        <CardHeader
          preHeading={`${mission.locationName}`}
          heading={`${mission.padName}`}
        />
      </Card>
    </div>
  );
};

export default MissionLaunchPadCard;
