import React from 'react';

import classes from "./ScheduleSelection.module.scss";

interface ScheduleSelectionType {
  selectedSchedule: string,
  setSelectedSchedule: React.Dispatch<React.SetStateAction<string>>
}

const ScheduleSelection: React.FC<ScheduleSelectionType> = (
  {selectedSchedule, setSelectedSchedule}
) => {
  return (
    <div className={classes.scheduleSelection}>
      <label>
        <input type="radio"
               name="selectSchedule"
               onChange={() => setSelectedSchedule('everySelectedMinutes')}
               checked={selectedSchedule === 'everySelectedMinutes'}
        />
        Every selected minutes
      </label>
      <label>
        <input type="radio"
               name="selectSchedule"
               onChange={() => setSelectedSchedule('weekly')}
        />
        Weekly
      </label>
      <label>
        <input type="radio"
               name="selectSchedule"
               onChange={() => setSelectedSchedule('daily')}
        />
        Daily
      </label>
      <label>
        <input type="radio"
               name="selectSchedule"
               onChange={() => setSelectedSchedule('monthly')}
        />
        Monthly
      </label>
    </div>
  );
};

export default ScheduleSelection;