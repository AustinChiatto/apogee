import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { Badge } from '../ui/badge';
import { getMissionDetails } from '@/lib/missionUtils';
import { useEffect, useState } from 'react';
import { getStatusType } from '@/lib/utils';

const MissionCountdownCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);
  const statusBgColor = `${getStatusType(mission.statusId)}`;
  const statusFgColor = `${getStatusType(mission.statusId)}-foreground`;

  const calculateTimeLeft = (targetDate: string) => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const difference = target - now;
    const totalDuration = 7 * 24 * 60 * 60 * 1000;

    const percentageLeft =
      difference > 0
        ? Math.min(Math.max(((totalDuration - difference) / totalDuration) * 100, 0), 100)
        : 100;

    return {
      timeLeft: difference > 0 ? Math.floor(difference / 1000) : 0,
      percentageLeft: Math.round(percentageLeft)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(mission.net));

  const padZero = (num: number) => {
    return String(num).padStart(2, '0');
  };

  const formatTimeLeft = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${padZero(days)} D ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(mission.net));
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [mission.net]);

  return (
    <Card>
      <CardHeader
        preHeading="Launch Countdown"
        heading={`${formatTimeLeft(timeLeft.timeLeft)}`}
      >
        <Badge variant={`${getStatusType(mission.statusId)}`}>{mission.statusName}</Badge>
      </CardHeader>
      <CardContent>
        <div className={`w-full rounded-full bg-${statusBgColor} overflow-hidden`}>
          <div
            className={`rounded-full h-4 bg-${statusFgColor}`}
            style={{ width: `${timeLeft.percentageLeft > 3 ? timeLeft.percentageLeft : 3}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCountdownCard;
