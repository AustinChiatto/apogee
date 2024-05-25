'use client';
import { Mission } from '@/types/missionProps';
import { ScrollArea } from './ui/scroll-area';
import Image from 'next/image';
import { Badge } from './ui/badge';

// pass upcoming or previous mission data to tab mission list
const MissionList: React.FC<{ items: Mission[] }> = ({ items }) => {
  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <ScrollArea className="h-full ">
      <div className="flex flex-col gap-4 p-4 pt-1">
        {items &&
          items.map((item) => (
            <button
              key={item.id}
              className="relative overflow-hidden rounded-2xl p-0 bg-card text-card-foreground w-full aspect-square transition-all missionCard"
              onMouseMove={handleMouseMove}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`${item.image && item.image}`}
                  fill
                  sizes="25vw"
                  style={{ objectFit: 'cover' }}
                  alt="todo:"
                />
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 overlay p-4 flex flex-col justify-between">
                <div className="flex align-center justify-end">
                  {item.mission.type && <Badge variant={'glass'}>{item.mission.type}</Badge>}
                </div>
                <div className="text-left">
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">{item.name}</h3>
                  <p className="text-sm tracking-tight">
                    {item.launch_service_provider.name} | {item.rocket.configuration.name}
                  </p>
                </div>
              </div>
            </button>
          ))}
      </div>
    </ScrollArea>
  );
};

export default MissionList;
