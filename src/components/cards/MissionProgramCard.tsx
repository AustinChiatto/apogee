import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';
import { Badge } from '../ui/badge';
import Icon from '../Icon';

const MissionProgramCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  return (
    <Card className="pb-[1.125rem]">
      <CardHeader heading={item.program?.[0] ? 'Mission & Program' : 'Mission Details'}>
        <Badge variant={'learnMore'}>
          <Icon
            name="plus"
            size="small"
            fill="purple"
          />
          More
        </Badge>
      </CardHeader>
      <CardContent>
        <ul className="w-full flex flex-col gap-1">
          <li className="flex-1 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Icon
                name="satellite"
                fill="secondary"
              />
              <p className="text-secondary">Mission Type</p>
            </span>
            <p className="text-card-foreground">{mission.type}</p>
          </li>
          {item.program?.[0] && (
            <li className="flex-1 flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Icon
                  name="sparkle"
                  fill="secondary"
                />
                <p className="text-secondary">{item.program?.[0].name} Program</p>
              </span>
              <p className="text-card-foreground">{item.program?.[0].type.name ?? 'Unknown'}</p>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MissionProgramCard;
