import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';

type MissionCardProps = {
  missionName: string;
  missionType?: string;
  missionDatePlanned?: string;
  providerNameFull: string;
  ascentVehicleNameFull: string;
};

const MissionCard = ({
  missionName,
  missionType,
  missionDatePlanned,
  providerNameFull,
  ascentVehicleNameFull
}: MissionCardProps) => {
  return (
    <Button className="relative overflow-hidden rounded-lg p-0 bg-card text-card-foreground shadow-sm w-full h-full aspect-square transition-all">
      <div className="relative w-full h-full">
        <Image
          src={'/falcon.png'}
          fill
          sizes="25vw"
          style={{ objectFit: 'cover' }}
          alt="todo:"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 overlay p-4 flex flex-col justify-between">
        <div className="flex align-center justify-end">
          <Badge variant={'glass'}>{missionType}</Badge>
        </div>
        <div className="text-left">
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">{missionName}</h3>
          <p className="text-sm tracking-tight">
            {providerNameFull} | {ascentVehicleNameFull}
          </p>
        </div>
      </div>
    </Button>
  );
};

export default MissionCard;
