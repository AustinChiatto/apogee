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
  const statusBgColor = `bg-${getStatusType(mission.statusId)}`;
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

  return (
    <>
      <figure className="relative max-w-full w-full h-auto aspect-video rounded-lg overflow-hidden border">
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <Badge>{provider.type} Launch</Badge>

          <Badge
            onMouseOver={() => setCountryLabel(countryNameLong)}
            onMouseLeave={() => setCountryLabel(countryNameShort)}
            className="cursor-default"
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
            heading="2D 18:32:08"
          >
            <Badge variant={`${getStatusType(mission.statusId)}`}>{mission.statusName}</Badge>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-full">
              <div className={`rounded-full w-2/3 h-4 ${statusBgColor}`}></div>
            </div>
          </CardContent>
        </Card>
        {/* Launch attempt contributions */}
        <Card>
          <CardHeader
            preHeading="Launch Contributions"
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
              <span className={`inline-block w-2 h-2 rounded-full ${statusBgColor}`}></span>
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
        <Card className="span-cols-1">
          <CardHeader
            preHeading={`${mission.locationName}`}
            heading={`${mission.padName}`}
          />
        </Card>
        <div className="span-cols-1 flex flex-col gap-2">
          <Card className="pb-[1.125rem]">
            <CardHeader preHeading="Destination" />
            <CardContent>
              <h4 className="heading-lg">
                {mission.orbitName} &middot; ({mission.orbitAbbrev})
              </h4>
              <p className="font-medium leading-none text-secondary pt-1">{mission.orbitDesc}</p>
            </CardContent>
          </Card>
          <Card className="pb-[1.125rem]">
            <CardHeader preHeading="Mission Type" />
            <CardContent>
              <h4 className="heading-lg">{mission.type}</h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MissionDisplayDetails;
