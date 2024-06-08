'use client';
import { Mission } from '@/types/missionProps';
import { ScrollArea } from './ui/scroll-area';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { useSelectedMission } from '@/hooks/use-mission-data';
import { translateDate } from '@/lib/utils';
import { getMissionDetails, getProviderDetails, getVehicleDetails } from '@/lib/missionUtils';

// pass upcoming or previous mission data to tab mission list
const ItemList: React.FC<{ items: Mission[] }> = ({ items }) => {
  const { selectedMissionId, setSelectedMissionId } = useSelectedMission();

  if (!selectedMissionId) {
    setSelectedMissionId(items[0].id);
  }

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-4 p-4 pt-2">
        {items &&
          items.map((item) => {
            const mission = getMissionDetails(item);
            const provider = getProviderDetails(item.launch_service_provider);
            const vehicle = getVehicleDetails(item.rocket);
            const providerName = provider.name.length > 15 ? provider.abbrev : provider.name;
            const vehicleName = vehicle.fullName.length > 20 ? vehicle.name : vehicle.fullName;

            return (
              <button
                key={mission.id}
                className={`border relative overflow-hidden rounded-lg p-0 bg-card text-card-foreground w-full aspect-square transition-all missionCard ${
                  mission.id === selectedMissionId &&
                  'border-[transparent] ring-2 ring-ring/25 ring-offset-4 ring-offset-background'
                }`}
                onMouseMove={handleMouseMove}
                onClick={() => setSelectedMissionId(mission.id)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={mission.image}
                    fill
                    sizes="15vw"
                    style={{ objectFit: 'cover' }}
                    alt="todo:"
                  />
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 p-4 flex flex-col justify-between overlay rounded-2xl">
                  <div className="flex align-center justify-end">
                    {mission.type && <Badge variant={'glass'}>{mission.type}</Badge>}
                  </div>
                  <div className="text-left">
                    <Badge
                      variant={'glass'}
                      className="mb-2"
                    >
                      {translateDate(mission.net)}
                    </Badge>
                    <h3 className="heading-lg">{mission.name}</h3>
                    <div className="flex items-center gap-2">
                      <p className="inline-block text-sm tracking-tight truncate max-w-[15ch]">
                        {providerName}
                      </p>
                      &middot;
                      <p className="inline-block text-sm tracking-tight">{vehicleName}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
      </div>
    </ScrollArea>
  );
};

export default ItemList;
