import { orbitDescriptions } from '@/data/orbitData';
import { Mission, Provider, Rocket } from '@/types/missionProps';

// Mission details
export const getMissionDetails = (item: Mission) => ({
  id: item?.id,
  name: item?.mission.name ?? 'Unknown',
  desc: item?.mission.description ?? 'Unknown',
  type: item?.mission.type ?? 'Unknown',
  image: item?.image ?? '/image-placeholder.jpg',
  statusId: item?.status.id ?? 0,
  statusName: item?.status.name ?? 'Unknown',
  statusDesc: item?.status.description ?? 'Unknown',
  net: item?.net ?? '',
  orbitId: item?.mission.orbit.id ?? 0,
  orbitName: item?.mission.orbit.name ?? 'Unknown Orbit',
  orbitAbbrev: item?.mission.orbit.abbrev ?? '',
  orbitDesc:
    orbitDescriptions.find((orbit) => orbit.id === item.mission.orbit?.id)?.descriptions ?? '',
  padName: item?.pad.name ?? 'Unknown',
  padDesc: item?.pad.description ?? 'Unknown',
  locationName: item?.pad.location.name ?? 'Unknown',
  padLongitude: item?.pad.longitude ?? '',
  padLatitude: item?.pad.latitude ?? '',
  orbitalCountYear: item?.orbital_launch_attempt_count_year ?? 0,
  attemptsYear: item?.agency_launch_attempt_count_year ?? 0
});

export const getVehicleDetails = (item: Rocket) => ({
  id: item.id,
  name: item.configuration.name ?? 'Unknown',
  fullName: item.configuration.full_name ?? null,
  family: item.configuration.family ?? null,
  variant: item.configuration.variant ?? null,
  active: item.configuration.active ?? false,
  reusable: item.configuration.reusable ?? false,
  desc: item.configuration.description ?? '',
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
  name: item.name ?? 'Unknown',
  type: item.type ?? 'Unknown',
  abbrev: item.abbrev ?? '',
  desc: item.description ?? '',
  logo: item.logo_url ?? '',
  administrator: item.administrator ?? 'Unknown',
  foundingYear: item.founding_year ?? '',
  launchers: item.launchers ?? null,
  spacecraft: item.spacecraft ?? null,
  launchCount: item.total_launch_count ?? null,
  launchSuccessCount: item.successful_launches ?? null,
  launchFailedCount: item.failed_launches ?? null,
  launchConsecutiveCount: item.consecutive_successful_launches ?? null,
  landingCount: item.attempted_landings ?? null,
  landingSuccessCount: item.successful_landings ?? null,
  landingFailedCount: item.failed_landings ?? null,
  landingConsecutiveCount: item.consecutive_successful_landings ?? null
});
