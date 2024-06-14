import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getProviderDetails } from '@/lib/missionUtils';
import { Badge } from '../ui/badge';
import Icon, { Icons } from '../Icon';
import { getSafeName } from '@/lib/utils';

type StatProps = {
  iconName: Icons['name'];
  label: string;
  value: string;
};

const ProviderDetailsCard = ({ item }: Item) => {
  const provider = getProviderDetails(item.launch_service_provider);

  const providerStats: StatProps[] = [
    { iconName: 'user', label: 'Administrator', value: provider.administrator },
    { iconName: 'globe', label: 'Type', value: provider.type },
    { iconName: 'calendar', label: 'Founding Year', value: provider.foundingYear }
  ];

  return (
    <Card className="pb-[1.125rem]">
      <CardHeader
        heading={`${getSafeName({
          nameLong: provider.name,
          nameShort: provider.abbrev,
          maxLength: 15
        })} Details`}
      >
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
          {providerStats.map((stat, i) => (
            <li
              key={i}
              className="flex-1 flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <Icon
                  name={stat.iconName}
                  fill="secondary"
                />
                <p className="text-secondary">{stat.label}</p>
              </span>
              <p className="text-card-foreground">{stat.value}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProviderDetailsCard;
