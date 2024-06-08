import { Mission } from '@/types/missionProps';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from './Card';
import { Badge } from './ui/badge';
import { getSafeName, getStatusType } from '@/lib/utils';
import { getMissionDetails, getProviderDetails } from '@/lib/missionUtils';
import { registerLocale, getName } from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import { useEffect, useState } from 'react';
registerLocale(enLocale);

type MissionDisplayDetails = {
  item: Mission;
};

const MissionDisplayDetails = ({ item }: MissionDisplayDetails) => {
  const mission = getMissionDetails(item);
  const provider = getProviderDetails(item.launch_service_provider);
  const statusBgColor = `${getStatusType(mission.statusId)}`;
  const statusFgColor = `${getStatusType(mission.statusId)}-foreground`;
  // attempts
  const currentAttempt = 1;
  const agencyAttempt = mission.attemptsYear;
  const totalAttemptsCount = mission.orbitalCountYear;
  const nonAgencyAttempts = totalAttemptsCount - agencyAttempt;
  const remainingAgencyAttempts = Math.max(0, agencyAttempt - currentAttempt);
  const agencyAttempts = Array.from({ length: remainingAgencyAttempts });
  const totalAttempts = Array.from({ length: nonAgencyAttempts });

  const countryCodeToEmoji = (code: string) => {
    const OFFSET = 127462 - 'A'.charCodeAt(0);
    return (
      String.fromCodePoint(code.charCodeAt(0) + OFFSET) +
      String.fromCodePoint(code.charCodeAt(1) + OFFSET)
    );
  };

  const countryNameShort = `${provider.countryCode} ${countryCodeToEmoji(provider.countryCode)}`;
  const countryNameLong = `${getName(provider.countryCode, 'en')} ${countryCodeToEmoji(
    provider.countryCode
  )}`;

  const [countryLabel, setCountryLabel] = useState(countryNameShort);

  useEffect(() => {
    setCountryLabel(countryNameShort);
  }, [countryNameShort]);

  // countdown timer
  const calculateTimeLeft = (targetDate: string) => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const difference = target - now;

    // The zero value of the percentageLeft
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
    <>
      <figure className="relative max-w-full w-full h-auto aspect-video rounded-lg overflow-hidden border">
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <Badge variant={'glass'}>{provider.type} Launch</Badge>

          <Badge
            variant={'glass'}
            onMouseOver={() => setCountryLabel(countryNameLong)}
            onMouseLeave={() => setCountryLabel(countryNameShort)}
          >
            {countryLabel}
          </Badge>
        </div>
        <Image
          src={mission.image}
          alt="todo:"
          sizes="75vw"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        {mission.vidUrl && (
          <div className="absolute bg-card/80 backdrop-blur bottom-4 right-4 border p-2 rounded-md z-10">
            <a
              href={`${mission.vidUrl}`}
              className="flex gap-4 items-center pr-2"
            >
              <div className="h-10 aspect-video rounded-sm bg-accent"></div>
              Watch Now
            </a>
          </div>
        )}
      </figure>
      <div className="flex gap-2">
        {/* Countdown timer */}
        <Card>
          <CardHeader
            preHeading="Launch Countdown"
            heading={`${formatTimeLeft(timeLeft.timeLeft)}`}
          >
            <Badge variant={`${getStatusType(mission.statusId)}`}>{mission.statusName}</Badge>
          </CardHeader>
          <CardContent>
            <div className="w-full rounded-full overflow-hidden">
              {/* <div
                className={`rounded-full h-4 ${statusBgColor}`}
                style={{ width: `${timeLeft.percentageLeft > 3 ? timeLeft.percentageLeft : 3}%` }}
              ></div> */}
              <span className="h-4 w-2 bg-"></span>
            </div>
          </CardContent>
        </Card>
        {/* Launch attempt contributions */}
        <Card>
          <CardHeader
            preHeading="Orbital Launch Contributions"
            heading={`${getSafeName({
              nameLong: provider.name,
              nameShort: provider.abbrev,
              maxLength: 15
            })}`}
          ></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {totalAttempts.map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-2 h-2 bg-muted rounded-full"
                ></span>
              ))}
              {agencyAttempts.map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-2 h-2 bg-secondary rounded-full"
                ></span>
              ))}
              <span className={`inline-block w-2 h-2 rounded-full bg-${statusFgColor}`}></span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card variant="sectionLabel">
        <CardHeader
          preHeading="Mission Details"
          heading={`${mission.name}`}
          isTitle
        />
      </Card>
      <div className="grid grid-cols-2 gap-2">
        {/* Launch location */}
        <div className="relative rounded-lg col-span-1 min-h-[24rem] overflow-hidden border">
          <Card className="rounded-md absolute bottom-4 left-4 right-4 h-fit min-h-[unset]">
            <CardHeader
              preHeading={`${mission.locationName}`}
              heading={`${mission.padName}`}
            />
          </Card>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          {/* Destination */}
          <Card className="pb-[1.125rem]">
            <CardHeader preHeading="Destination" />
            <CardContent>
              <h4 className="heading-lg">
                {mission.orbitName} &middot; ({mission.orbitAbbrev})
              </h4>
              <p className="font-medium leading-none text-secondary pt-1">{mission.orbitDesc}</p>
            </CardContent>
          </Card>
          {/* Mission Type */}
          <Card className="pb-[1.125rem]">
            <CardHeader preHeading="Mission Type" />
            <CardContent>
              <h4 className="heading-lg">{mission.type}</h4>
            </CardContent>
          </Card>
        </div>
        {/* Program */}
        {item.program[0] && (
          <section className="flex justify-between col-span-2 min-h-[9rem] bg-card p-6 rounded-lg overflow-hidden">
            <div className="flex flex-col justify-between">
              <CardHeader
                preHeading="Program"
                heading={`${item.program?.[0]?.name}`}
              />
              <CardContent>
                <p className="font-medium leading-none text-secondary pt-1">
                  {item.program?.[0]?.type.name}
                </p>
              </CardContent>
            </div>
            {item.program?.[0]?.mission_patches?.[0]?.image_url && (
              <div className="h-full flex items-center">
                <figure className="w-24 relative aspect-square grid place-items-center">
                  <Image
                    src={item.program?.[0]?.mission_patches?.[0]?.image_url}
                    alt="todo:"
                    sizes="5vw"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                </figure>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default MissionDisplayDetails;
