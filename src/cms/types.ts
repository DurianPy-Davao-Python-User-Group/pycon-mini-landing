import type { eventScheduleMapper } from './mappers';

export interface CMSDto {
  data: {
    listEventSchedules: {
      data: ScheduleDto[];
    };
    listSpeakerModels: {
      data: Speaker[];
    };
    listSponsorTierModels: {
      data: SponsorTier[];
    };
    listSponsorModels: {
      data: Sponsor[];
    };
  };
}

export interface Speaker {
  image: string; // Assuming image is a URL or a file path
  name: string;
  talkTitle: string;
  company: string;
  position: string;
  bionote: string;
}

export interface Activity {
  scheduleTitle: string;
  speaker: Speaker;
  startTime: number; // Assuming time is in a format like UNIX timestamp or minutes
  endTime: number;
}

export interface ScheduleDto {
  scheduleTitle: string;
  scheduleStartTime: number;
  scheduleEndTime: number;
  scheduleActivities: Activity[];
}

export type Schedule = ReturnType<typeof eventScheduleMapper>;

export interface SponsorTier {
  name: string;
  order: number;
  displayName: string;
  billingAcknowledgement: string;
}

export interface Sponsor {
  image: string; // Assuming image is a URL or a file path
  name: string;
  tagline: string;
  position: string;
  sponsorTier: SponsorTier;
  website?: string;
}

export interface GroupedSponsorTier {
  name: string;
  displayName: string;
  billingAcknowledgement: string;
  priority: number;
  sponsors: Sponsor[];
}

export const SPONSOR_PRIORITY: Record<string, number> = {
  keystone: 1,
  organized: 1,
  platinum: 2,
  food: 3,
  gold: 3,
  diversity: 3,
  silver: 5,
  'in-kind': 5,
  contributing: 6,
  community: 6,
};
