'use client';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { Mission } from '@/types/missionProps';
import { H3 } from './Typography';
import { getStatusClass, translateDate } from '@/lib/utils';

const MissionDisplay: React.FC<{ items: { upcoming: Mission[]; previous: Mission[] } }> = ({
  items
}) => {
  const { selectedMissionId } = useSelectedMission();
  const { upcoming, previous } = items;
  const item =
    upcoming.find((mission) => mission.id === selectedMissionId) ||
    previous.find((mission) => mission.id === selectedMissionId);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5">
        <div className="flex items-center gap-4">
          {item?.status.id && (
            <div className={`w-2 h-2 rounded-full ${getStatusClass(item?.status.id)}`}></div>
          )}
          <H3>{item?.name ?? 'Unknown or Classified'}</H3>
        </div>
        <div className="bg-foreground text-background px-2 rounded">
          {item?.net ? translateDate(item.net) : 'TBC'}
        </div>
      </div>
    </>
  );
};

export default MissionDisplay;
