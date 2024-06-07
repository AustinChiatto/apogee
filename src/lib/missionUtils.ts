import { orbitDescriptions } from '@/data/orbitData';
import { Mission, Provider, Rocket } from '@/types/missionProps';

// Mission details
export const getMissionDetails = (item: Mission) => ({
  id: item?.id,
  name: item?.mission.name ?? 'Unknown or Classified',
  desc: item?.mission.description ?? 'No available data',
  type: item?.mission.type ?? 'Unknown or Classified',
  image: item?.image ?? '/image-placeholder.jpg',
  statusId: item?.status.id ?? 0,
  statusName: item?.status.name ?? 'No available data',
  statusDesc: item?.status.description ?? 'No available data',
  net: item?.net ?? '',
  orbitId: item?.mission.orbit.id ?? 0,
  orbitName: item?.mission.orbit.name ?? 'Unknown or Classified Orbit',
  orbitAbbrev: item?.mission.orbit.abbrev ?? '',
  orbitDesc:
    orbitDescriptions.find((orbit) => orbit.id === item.mission.orbit?.id)?.descriptions ?? '',
  padName: item?.pad.name ?? 'No available data',
  padDesc: item?.pad.description ?? 'No available data',
  locationName: item?.pad.location.name ?? 'No available data',
  padLongitude: item?.pad.longitude ?? '',
  padLatitude: item?.pad.latitude ?? '',
  vidUrl: item?.vidURLs?.[0]?.url ?? null,
  vidThumb: item.vidURLs?.[0]?.feature_image ?? null,
  vidDesc: item.vidURLs?.[0]?.description ?? null,
  orbitalCountYear: item?.orbital_launch_attempt_count_year ?? 0,
  attemptsYear: item?.agency_launch_attempt_count_year ?? 0
});

export const getVehicleDetails = (item: Rocket) => ({
  id: item.id,
  name: item.configuration.name ?? 'No available data',
  fullName: item.configuration.full_name ?? null,
  family: item.configuration.family ?? null,
  variant: item.configuration.variant ?? null,
  active: item.configuration.active ?? false,
  reusable: item.configuration.reusable ?? false,
  desc: item.configuration.description ?? 'No available data',
  stageMin: item.configuration.min_stage ?? null,
  stageMax: item.configuration.max_stage ?? null,
  length: item.configuration.length ?? null,
  diameter: item.configuration.diameter ?? null,
  maidenFlight: item.configuration.maiden_flight ?? null,
  launchCost: item.configuration.launch_cost ?? null,
  launchMass: item.configuration.launch_mass ?? null,
  capacityLeo: item.configuration.leo_capacity ?? null,
  capacityGto: item.configuration.gto_capacity ?? null,
  thrustTo: item.configuration.to_thrust ?? null,
  apogee: item.configuration.apogee ?? null,
  launchCount: item.configuration.total_launch_count ?? null,
  launchFailedCount: item.configuration.failed_launches ?? null,
  launchSuccessCount: item.configuration.successful_launches ?? null,
  launchConsecutiveCount: item.configuration.consecutive_successful_launches ?? null,
  landingCount: item.configuration.attempted_landings ?? null,
  landingFailedCount: item.configuration.failed_landings ?? null,
  landingSuccessCount: item.configuration.successful_landings ?? null,
  landingConsecutiveCount: item.configuration.consecutive_successful_landings ?? null
});

// Provider Details
export const getProviderDetails = (item: Provider) => ({
  id: item.id ?? null,
  name: item.name ?? 'No available data',
  type: item.type ?? 'No available data',
  abbrev: item.abbrev ?? '',
  desc: item.description ?? '',
  countryCode: item.country_code ?? null,
  logo: item.logo_url ?? '',
  image: item.image_url ?? '/image-placeholder.jpg',
  administrator: item.administrator ?? 'No available data',
  foundingYear: item.founding_year ?? 'No available data',
  launchers: item.launchers != '' ? item.launchers : 'No known launch vehicles',
  spacecraft: item.spacecraft != '' ? item.spacecraft : 'No known spacecraft',
  launchCount: item.total_launch_count ?? null,
  launchSuccessCount: item.successful_launches ?? null,
  launchFailedCount: item.failed_launches ?? null,
  launchConsecutiveCount: item.consecutive_successful_launches ?? null,
  landingCount: item.attempted_landings ?? null,
  landingSuccessCount: item.successful_landings ?? null,
  landingFailedCount: item.failed_landings ?? null,
  landingConsecutiveCount: item.consecutive_successful_landings ?? null
});
