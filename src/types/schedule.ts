import React from "react";

export enum ScheduleActionsType {
  LOAD_CRON_LINE = 'LOAD_CRON_LINE',
  SAVE_CRON_LINE = 'SAVE_CRON_LINE'
}

export type ScheduleType = string

export interface ScheduleInputsProps {
  time: {minutes: string, hours: string},
  setTime: React.Dispatch<React.SetStateAction<{minutes: string, hours: string}>>,
  selectedSchedule: string,
  setSelectedDays: React.Dispatch<React.SetStateAction<number[]>>
  setSelectedMonths: React.Dispatch<React.SetStateAction<number[]>>
}

interface loadCronLine {
  type: ScheduleActionsType.LOAD_CRON_LINE,
  payload: ScheduleType
}

interface saveCronLine {
  type: ScheduleActionsType.SAVE_CRON_LINE,
  payload: ScheduleType
}

export type ScheduleAction = loadCronLine | saveCronLine;