// Define types based on the API structure
export type Mission = {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  net_precision: {
    id: number;
    name: string;
    abbrev: string;
    description: string;
  };
  probability: number;
  weather_concerns: string | null;
  holdreason: string;
  failreason: string;
  hashtag: string | null;
  launch_service_provider: {
    id: number;
    url: string;
    name: string;
    type: string;
  };
  rocket: {
    id: number;
    configuration: {
      id: number;
      url: string;
      name: string;
      family: string;
      full_name: string;
      variant: string;
    };
  };
  mission: {
    id: number;
    name: string;
    description: string;
    launch_designator: string | null;
    type: string;
    orbit: {
      id: number;
      name: string;
      abbrev: string;
    };
    agencies: {
      id: number;
      url: string;
      name: string;
      featured: boolean;
      type: string;
      country_code: string;
      abbrev: string;
      description: string;
      administrator: string;
      founding_year: string;
      launchers: string;
      spacecraft: string;
      launch_library_url: string | null;
      total_launch_count: number;
      consecutive_successful_launches: number;
      successful_launches: number;
      failed_launches: number;
      pending_launches: number;
      consecutive_successful_landings: number;
      successful_landings: number;
      failed_landings: number;
      attempted_landings: number;
      info_url: string;
      wiki_url: string;
      logo_url: string;
      image_url: string;
      nation_url: string;
    }[];
    info_urls: string[];
    vid_urls: string[];
  };
  pad: {
    id: number;
    url: string;
    agency_id: number;
    name: string;
    description: string | null;
    info_url: string | null;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: {
      id: number;
      url: string;
      name: string;
      country_code: string;
      description: string;
      map_image: string;
      timezone_name: string;
      total_launch_count: number;
      total_landing_count: number;
    };
    country_code: string;
    map_image: string;
    total_launch_count: number;
    orbital_launch_attempt_count: number;
  };
  webcast_live: boolean;
  image: string;
  infographic: string | null;
  program: any[];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
  type: string;
};

export type MissionResponse = {
  results: Mission[];
};
