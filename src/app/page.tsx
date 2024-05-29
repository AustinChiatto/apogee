import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { H4 } from '@/components/Typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MissionList from '@/components/MissionList';
import getMissions from '@/api/fetchMissionData';
import { SelectedMissionProvider } from '@/hooks/use-mission-data';
import MissionDisplay from '@/components/MissionDisplay';

const Home = async () => {
  const missions = await getMissions();

  return (
    <SelectedMissionProvider>
      <main className="h-screen max-h-screen flex flex-col">
        <ResizablePanelGroup
          direction="horizontal"
          className="flex-1"
        >
          <ResizablePanel
            defaultSize={25}
            minSize={15}
            maxSize={30}
            className="max-h-full flex flex-col relative"
          >
            <Tabs
              defaultValue="upcoming"
              className="flex flex-col h-full"
            >
              <div className="flex-1 overflow-hidden flex flex-col">
                <div className="sticky top-0 z-10 flex items-center p-4">
                  <h1 className="visuallyHidden">Apogee Spaceflight Tracker - Upcoming Missions</h1>
                  <H4>Missions</H4>
                  <TabsList className="ml-auto">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="previous">Previous</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent
                  value="upcoming"
                  className="flex-1 m-0 overflow-hidden"
                >
                  {missions && <MissionList items={missions.upcoming} />}
                </TabsContent>
                <TabsContent
                  value="previous"
                  className="flex-1 m-0 overflow-hidden"
                >
                  {missions && <MissionList items={missions.previous} />}
                </TabsContent>
              </div>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            defaultSize={75}
            className="p-4 pt-0 pr-0 flex flex-col border-l relative"
          >
            <MissionDisplay items={missions} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </SelectedMissionProvider>
  );
};

export default Home;
