import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import getMissions from '@/api/fetchMissionData';
import { SelectedMissionProvider } from '@/hooks/use-mission-data';
import ItemDisplay from '@/components/ItemDisplay';
import ItemList from '@/components/ItemList';

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
                  <h4 className="heading-lg">Missions</h4>
                  <TabsList className="ml-auto">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="previous">Recent</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent
                  value="upcoming"
                  className="flex-1 m-0 overflow-hidden"
                >
                  {missions && <ItemList items={missions.upcoming} />}
                </TabsContent>
                <TabsContent
                  value="previous"
                  className="flex-1 m-0 overflow-hidden"
                >
                  {missions && <ItemList items={missions.previous} />}
                </TabsContent>
              </div>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel
            defaultSize={75}
            className="pl-4 flex flex-col border-l relative"
          >
            <ItemDisplay items={missions} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </SelectedMissionProvider>
  );
};

export default Home;
