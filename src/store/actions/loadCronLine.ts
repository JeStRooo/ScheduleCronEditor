import {ScheduleActionsType, ScheduleType} from "../../types/schedule";

export const loadCronLine = (line: ScheduleType) => {
  return {
    type: ScheduleActionsType.LOAD_CRON_LINE,
    payload: line
  }
}