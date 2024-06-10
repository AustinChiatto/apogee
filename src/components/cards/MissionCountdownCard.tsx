import { Item } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from '../Card';
import { Badge } from '../ui/badge';
import { getMissionDetails } from '@/lib/missionUtils';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createArray, getStatusType } from '@/lib/utils';
import Icon from '../Icon';

// todo: separate timer to reduce re-renders
const calculateTimeLeft = (targetDate: string) => {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const difference = target - now;
  const totalDuration = 14 * 24 * 60 * 60 * 1000;

  const percentageLeft =
    difference > 0
      ? Math.min(Math.max(((totalDuration - difference) / totalDuration) * 100, 0), 100)
      : 100;

  return {
    timeLeft: difference > 0 ? Math.floor(difference / 1000) : 0,
    percentageLeft: percentageLeft / 100
  };
};

const padZero = (num: number) => {
  return String(num).padStart(2, '0');
};

const formatTimeLeft = (totalSeconds: number) => {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <>
      {days}
      <span className="text-secondary pl-1 pr-2">D</span>
      {padZero(hours)}
      <span>:</span>
      {padZero(minutes)}
      <span>:</span>
      {padZero(seconds)}
    </>
  );
};

const MissionCountdownCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);
  const status = getStatusType(mission.statusId);
  const statusFgColor = `${getStatusType(mission.statusId)}-foreground`;
  const containerRef = useRef<HTMLUListElement>(null);
  const refWidth = containerRef?.current && containerRef?.current.offsetWidth;

  const [timeState, setTimeState] = useState(calculateTimeLeft(mission.net));

  useEffect(() => {
    const updateTimer = () => {
      setTimeState(calculateTimeLeft(mission.net));
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [mission.net]);

  const timerMarkCount = refWidth ? Math.round(refWidth / (8 + 4)) : 0;
  const marksFilledCount =
    Math.floor(timerMarkCount * Number(timeState.percentageLeft)) > 0
      ? Math.floor(timerMarkCount * Number(timeState.percentageLeft))
      : 1;
  const timerMarksFilled = createArray(marksFilledCount);
  const timerMarksDef = createArray(timerMarkCount - marksFilledCount);

  return (
    <Card>
      <CardHeader
        preHeading="Launch Countdown"
        heading={formatTimeLeft(timeState.timeLeft)}
      >
        <Badge variant={status}>
          <Icon
            name={status}
            fill={statusFgColor}
            size="small"
          />
          {mission.statusName}
        </Badge>
      </CardHeader>
      <CardContent>
        <ul
          ref={containerRef}
          className="w-full flex gap-1"
        >
          {timerMarksFilled.map((_, i) => (
            <li
              key={i}
              className={`block flex-1 max-w-2 h-6 rounded-full bg-${statusFgColor}`}
            ></li>
          ))}
          {timerMarksDef.map((_, i) => (
            <li
              key={i}
              className="block flex-1 max-w-2 h-6 rounded-full bg-muted"
            ></li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MissionCountdownCard;
