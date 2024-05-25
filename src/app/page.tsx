'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import MissionCard from '@/components/MissionCard';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { H2 } from '@/components/Typography';

const missionDataPh = [
  {
    missionName: 'Starlink Group 6-62',
    providerNameFull: 'SpaceX',
    ascentVehicleNameFull: 'Falcon 9 Block 5',
    missionType: 'Communications'
  },
  {
    missionName: 'Starlink Group 6-62',
    providerNameFull: 'SpaceX',
    ascentVehicleNameFull: 'Falcon 9 Block 5',
    missionType: 'Earth Science'
  },
  {
    missionName: 'Starlink Group 6-62',
    providerNameFull: 'SpaceX',
    ascentVehicleNameFull: 'Falcon 9 Block 5',
    missionType: 'Resupply'
  },
  {
    missionName: 'Starlink Group 6-62',
    providerNameFull: 'SpaceX',
    ascentVehicleNameFull: 'Falcon 9 Block 5',
    missionType: 'Resupply'
  }
];

export default function Home() {
  return (
    <main className="h-screen max-h-screen flex flex-col">
      <div className="min-w-screen p-4 border-b flex justify-between items-center">
        <h1>Apogee</h1>
        <ThemeSwitcher />
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1"
      >
        <ResizablePanel
          defaultSize={20}
          minSize={15}
          maxSize={30}
          className="max-h-full flex flex-col"
        >
          <ScrollArea className="flex-1 overflow-y-scroll relative p-4">
            <ul className="flex flex-col gap-2">
              {missionDataPh.map((e, i) => (
                <li key={i}>
                  <MissionCard
                    missionName={e.missionName}
                    providerNameFull={e.providerNameFull}
                    ascentVehicleNameFull={e.ascentVehicleNameFull}
                    missionType={e.missionType}
                  />
                </li>
              ))}
            </ul>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="p-4 pl-0 flex items-center justify-center border-l">
          <div className="w-full h-full">
            <H2>Mission Display</H2>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
