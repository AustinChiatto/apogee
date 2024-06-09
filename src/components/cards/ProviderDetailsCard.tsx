import { Item } from '@/types/missionProps';
import { Card, CardContent } from '../Card';
import { getProviderDetails } from '@/lib/missionUtils';

const ProviderDetailsCard = ({ item }: Item) => {
  const provider = getProviderDetails(item.launch_service_provider);

  const providerStats = [
    { label: 'Administrator', value: provider.administrator },
    { label: 'Type', value: provider.type },
    { label: 'Founding Year', value: provider.foundingYear }
  ];

  return (
    <Card
      className="col-span-1"
      variant="tall"
    >
      <CardContent className="pt-[unset] flex-1">
        <ul className="flex flex-col gap-2 h-full">
          {providerStats.map((stat, i) =>
            stat.value ? (
              <li
                key={i}
                className="flex-1 border rounded-md p-4 py-6 flex flex-col items-center justify-center gap-1 last-grid-item-odd"
              >
                <h4 className="heading-sm">{stat.label}</h4>
                <h5 className="heading-lg">{stat.value}</h5>
              </li>
            ) : null
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProviderDetailsCard;
