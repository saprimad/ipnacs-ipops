import siteData from "@/data/site.json";
import speakersData from "@/data/speakers.json";
import scheduleData from "@/data/schedule.json";

export type SiteData = typeof siteData;
export type Speaker = (typeof speakersData)[number];
export type ScheduleDay = (typeof scheduleData.days)[number];

export const site = siteData;
export const speakers = speakersData;
export const schedule = scheduleData.days;
