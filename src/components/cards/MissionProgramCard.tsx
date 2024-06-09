import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';

const MissionProgramCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  return (
    <Card className="pb-[1.125rem]">
      <CardHeader preHeading="Mission & Program" />
      <CardContent>
        <h4 className="heading-lg">{mission.type}</h4>
      </CardContent>
    </Card>
  );
};

export default MissionProgramCard;
