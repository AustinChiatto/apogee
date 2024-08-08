import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { getMissionDetails } from '@/lib/missionUtils';
import { createArray } from '@/lib/utils';

const MissionDestinationCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);

  const low = (
    <>
      <div className="w-[20%] h-full p-2 flex gap-2 bg-purple/15 rounded-full">
        <div className="h-full aspect-square rounded-full bg-accent-foreground"></div>
        <div className="flex-1 rounded-full bg-purple"></div>
      </div>
      <div className="flex-1 p-2 bg-purple/20 rounded-full"></div>
    </>
  );

  const medium = (
    <>
      <div className="w-[20%] h-full p-2 flex gap-2 bg-purple/15 rounded-full">
        <div className="h-full aspect-square rounded-full bg-accent-foreground"></div>
      </div>
      <div className="flex-1 p-2 bg-purple/20 rounded-full">
        <div className="h-full rounded-full bg-purple"></div>
      </div>
    </>
  );

  const high = (
    <>
      <div className="w-[20%] h-full bg-purple/15 rounded-full"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 p-2 gap-2 flex">
        <div className="h-full aspect-square rounded-full bg-accent-foreground"></div>
        <div className="w-full h-full rounded-full bg-purple"></div>
      </div>
      <div className="flex-1 p-2 bg-purple/20 rounded-full"></div>
    </>
  );

  const planetList = (count: number) => {
    const planets = createArray(count);
    return (
      <ul className="h-full p-2 bg-purple/15 rounded-full flex gap-1">
        {planets.map((_, i) => (
          <li
            key={i}
            className="h-full aspect-square rounded-full bg-purple/40"
          ></li>
        ))}
      </ul>
    );
  };

  const planetOrbitInner = (
    <ul className="flex-1 h-full p-2 flex gap-1 bg-purple/15 rounded-full">
      <li className="h-full aspect-square rounded-full bg-accent-foreground"></li>
      <li className="w-full h-full rounded-full bg-purple"></li>
      <li className="h-full aspect-square rounded-full bg-purple"></li>
    </ul>
  );

  const planetaryOrbit = {
    lunar: (
      <>
        {planetOrbitInner}
        {planetList(4)}
      </>
    ),
    mars: (
      <>
        {planetList(1)}
        {planetOrbitInner}
        {planetList(3)}
      </>
    ),
    mercury: (
      <>
        {planetList(2)}
        {planetOrbitInner}
        {planetList(2)}
      </>
    ),
    venus: (
      <>
        {planetList(3)}
        {planetOrbitInner}
        {planetList(1)}
      </>
    ),
    jupiter: (
      <>
        {planetList(4)}
        {planetOrbitInner}
      </>
    )
  };

  const unknown = (
    <div className="flex-1 p-2 bg-purple/20 rounded-full">
      <div className="h-full aspect-square rounded-full bg-accent-foreground"></div>
    </div>
  );

  const renderOrbitComponent = (orbitId: number) => {
    switch (orbitId) {
      case 8:
      case 13:
      case 17:
        return low;
      case 12:
      case 0:
        return medium;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 14:
      case 16:
      case 18:
      case 21:
      case 26:
        return high;
      case 9:
      case 10:
      case 11:
        return planetaryOrbit.lunar;
      case 19:
      case 23:
        return planetaryOrbit.mars;
      case 24:
        return planetaryOrbit.mercury;
      case 20:
      case 22:
        return planetaryOrbit.venus;
      case 27:
        return planetaryOrbit.jupiter;
      case 25:
        return unknown; // unknown
      case 15:
        return unknown; // suborbital
      default:
        return unknown;
    }
  };

  return (
    <Card className="pb-[1.125rem]">
      <CardHeader heading={mission.orbitName}></CardHeader>
      <CardContent>
        <div className="relative flex h-7 w-full rounded-full overflow-hidden bg-purple/20">{renderOrbitComponent(mission.orbitId)}</div>
        <p className="font-sm leading-none text-center text-purple pt-3">{mission.orbitDesc}</p>
      </CardContent>
    </Card>
  );
};

export default MissionDestinationCard;
