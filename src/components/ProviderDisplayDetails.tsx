'use client';
import { Mission } from '@/types/missionProps';
import { Card, CardContent, CardHeader } from './Card';
import { getProviderDetails } from '@/lib/missionUtils';
import Image from 'next/image';

type ProviderDisplayDetails = {
  item: Mission;
};

const ProviderDisplayDetails = ({ item }: ProviderDisplayDetails) => {
  const provider = getProviderDetails(item.launch_service_provider);

  const providerStats = [
    { label: 'Administrator', value: provider.administrator },
    { label: 'Type', value: provider.type },
    { label: 'Founding Year', value: provider.foundingYear }
  ];

  const launchesFailedPercent = Math.round(
    (provider.launchFailedCount / provider.launchCount) * 100
  );
  const landingsFailedPercent = Math.round(
    (provider.landingFailedCount / provider.landingCount) * 100
  );

  const launchesSuccessPercent = Math.round(
    (provider.launchSuccessCount / provider.launchCount) * 100
  );
  const landingsSuccessPercent = Math.round(
    (provider.landingSuccessCount / provider.landingCount) * 100
  );

  return (
    <>
      <Card variant="sectionLabel">
        <CardHeader
          preHeading="Launch Service Provider"
          heading={`${provider.name}`}
          isTitle
        />
      </Card>
      <div className="grid grid-cols-2 gap-2">
        <Card className="cols-span-1">
          <CardContent className="pt-[unset] flex-1">
            <ul className="flex flex-col gap-2 h-full">
              {providerStats.map((stat, i) =>
                stat.value ? (
                  <li
                    key={i}
                    className="flex-1 border rounded-md p-4 py-6 flex flex-col items-center justify-center gap-1 last-grid-item-odd"
                  >
                    <h4 className="heading-sm">{stat.label}</h4>
                    <h5 className="heading-lg">{stat.value}</h5>
                  </li>
                ) : null
              )}
            </ul>
          </CardContent>
        </Card>
        {/* Provider Image */}
        <Card
          variant="image"
          className="cols-span-1"
        >
          <Image
            src={provider.image}
            alt="todo:"
            sizes="15vw"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="span-cols-1 flex gap-2">
          {/* Launch record */}
          <Card>
            <CardHeader
              preHeading="Launch Record"
              heading={`${provider.launchCount}`}
            />
            <CardContent className="flex-1">
              <div className="w-full h-full flex flex-col bg-muted/20 rounded-md overflow-hidden">
                {provider.launchCount > 0 && (
                  <>
                    <div
                      className="bg-success/50 cursor-pointer hover:bg-success/70"
                      style={{ height: `${launchesSuccessPercent}%` }}
                    ></div>
                    <div
                      className="bg-danger/50 cursor-pointer hover:bg-danger/70"
                      style={{ height: `${launchesFailedPercent}%` }}
                    ></div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
          {/* Landing record */}
          <Card>
            <CardHeader
              preHeading={'Landing Record'}
              heading={`${provider.landingCount}`}
            />
            <CardContent className="flex-1">
              <div className="w-full h-full flex flex-col bg-muted/20 rounded-md overflow-hidden">
                {provider.landingCount > 0 && (
                  <>
                    <div
                      className="bg-success/50 cursor-pointer hover:bg-success/70"
                      style={{ height: `${landingsSuccessPercent}%` }}
                    ></div>
                    <div
                      className="bg-danger/50 cursor-pointer hover:bg-danger/70"
                      style={{ height: `${landingsFailedPercent}%` }}
                    ></div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="span-cols-1 flex flex-col gap-2">
          {/* Provider launch vehicles */}
          <Card className="pb-[1.125rem]">
            <CardHeader preHeading="Launch Vehicles" />
            <CardContent>
              <h4 className="heading-lg">{provider.launchers}</h4>
            </CardContent>
          </Card>
          {/* Provider spacecraft */}
          <Card className="pb-[1.125rem]">
            <CardHeader preHeading="Spacecraft" />
            <CardContent>
              <h4 className="heading-lg">{provider.spacecraft}</h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProviderDisplayDetails;
