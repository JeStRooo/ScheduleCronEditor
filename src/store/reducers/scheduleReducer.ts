import {ScheduleAction, ScheduleActionsType} from "../../types/schedule";

const initialState = {
  cronLines: []
}

export const scheduleReducer = (state = initialState, action: ScheduleAction) => {
  switch (action.type) {
    case ScheduleActionsType.LOAD_CRON_LINE:
      return {
        ...state,
        cronLines: [...state.cronLines, action.payload]
      }
    default:
      return state
  }
}