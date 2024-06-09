import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Item } from '@/types/missionProps';
import { getMissionDetails, getProviderDetails } from '@/lib/missionUtils';
import { getName, registerLocale } from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import Icon from '../Icon';
registerLocale(enLocale);

const MissionMediaCard = ({ item }: Item) => {
  const mission = getMissionDetails(item);
  const provider = getProviderDetails(item.launch_service_provider);

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
            <div className="h-10 aspect-video rounded-sm bg-accent-foreground grid place-items-center">
              <Icon name="play" />
            </div>
            Watch Now
          </a>
        </div>
      )}
    </figure>
  );
};

export default MissionMediaCard;
