import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { H2, H4 } from '@/components/Typography';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MissionList from '@/components/MissionList';
import getUpcomingLaunches from '@/api/fetchMissionData';

const Home = async () => {
  const upcoming = await getUpcomingLaunches();
  return (
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
                {upcoming && <MissionList items={upcoming.results} />}
              </TabsContent>
              <TabsContent
                value="previous"
                className="flex-1 m-0 overflow-hidden"
              >
                {upcoming && <MissionList items={upcoming.results} />}
              </TabsContent>
            </div>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="p-4 flex items-center justify-center border-l">
          <div className="w-full h-full">
            <H2>Mission Display</H2>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default Home;
