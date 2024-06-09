import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';

const MissionDestinationCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  return (
    <Card className="pb-[1.125rem]">
      <CardHeader preHeading="Destination" />
      <CardContent>
        <h4 className="heading-lg">
          {mission.orbitName} &middot; ({mission.orbitAbbrev})
        </h4>
        <p className="font-medium leading-none text-secondary pt-1">{mission.orbitDesc}</p>
      </CardContent>
    </Card>
  );
};

export default MissionDestinationCard;
