import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';
import { Badge } from '../ui/badge';
import Icon from '../Icon';

const MissionDestinationCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  const earthOrbits = (
    <>
      <div className="w-[20%] h-full p-2 flex gap-2 bg-purple/20 rounded-full">
        <div className="h-full aspect-square rounded-full bg-blue"></div>
        <div className="flex-1 rounded-full bg-purple"></div>
      </div>
      <div className="flex-1 p-2 bg-purple/20 rounded-full">
        {/* <div className="h-full rounded-full bg-purple"></div> */}
      </div>
    </>
  );

  return (
    <Card>
      <CardHeader heading={mission.orbitName}>
        <Badge variant={'learnMore'}>
          <Icon
            name="plus"
            size="small"
            fill="purple"
          />{' '}
          More
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="relative flex h-8 w-full rounded-full overflow-hidden bg-purple/20">
          {earthOrbits}
        </div>
        <p className="font-sm leading-none text-center text-purple pt-3">{mission.orbitDesc}</p>
      </CardContent>
    </Card>
  );
};

export default MissionDestinationCard;
