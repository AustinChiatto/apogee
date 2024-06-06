'use client';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { Mission } from '@/types/missionProps';
import { getStatusType, translateDate } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import MissionDisplayDetails from './MissionDisplayDetails';
import VehicleDisplayDetails from './VehicleDisplayDetails';
import ProviderDisplayDetails from './ProviderDisplayDetails';
import { getMissionDetails } from '@/lib/missionUtils';

const ItemDisplay: React.FC<{ items: { upcoming: Mission[]; previous: Mission[] } }> = ({
  items
}) => {
  const { selectedMissionId } = useSelectedMission();
  const { upcoming, previous } = items;
  const item =
    upcoming.find((mission) => mission.id === selectedMissionId) ||
    previous.find((mission) => mission.id === selectedMissionId);

  if (!item) {
    return <p>Mission not found</p>;
  }

  const mission = getMissionDetails(item);

  const displayComponents = [MissionDisplayDetails, VehicleDisplayDetails, ProviderDisplayDetails];

  const displayHeader = (
    <div className="sticky top-0 left-0 right-0 flex items-center justify-between h-[4.5rem] z-10 bg-background">
      <div className="flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full bg-${getStatusType(mission.statusId)}`}></div>
        <h3 className="heading-xl">{mission.name ?? 'NAME NULL'}</h3>
      </div>
      <div className="bg-foreground text-background px-2 rounded">
        {mission.net ? translateDate(mission.net) : 'TBC'}
      </div>
    </div>
  );

  return (
    <>
      <ScrollArea className="h-full pr-4">
        <div className="max-w-[69rem] mx-auto pb-16">
          {displayHeader}
          <div className="flex-1 pb-4 pt-0 flex flex-col gap-2">
            {displayComponents.map((Component, i) => (
              <section
                key={i}
                className="flex flex-col gap-2"
              >
                {item && Component && <Component item={item} />}
              </section>
            ))}
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default ItemDisplay;
