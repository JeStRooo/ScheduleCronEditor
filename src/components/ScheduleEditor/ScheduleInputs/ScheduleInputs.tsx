import React from 'react';

import AntSelect from "../../../UI/Select/Select";
import Input from "../../../UI/Input/Input";

import {daysOfTheWeek} from "../../../mockData/daysOfTheWeek";
import {monthsOfTheYear} from "../../../mockData/monthsOfTheYear";

import {ScheduleInputsProps} from "../../../types/schedule";

import classes from "./ScheduleInputs.module.scss";

const ScheduleInputs: React.FC<ScheduleInputsProps> = (
  {time, setTime, selectedSchedule, setSelectedDays, setSelectedMonths}
) => {

  const handleSelectDaysChange = (selectedValues: string[]) => {
    const selectedDays: number[] = selectedValues.map(dayName =>
      daysOfTheWeek.find(day => day.value === dayName)?.id || 0
    ).filter(id => id !== undefined) as number[];
    setSelectedDays(selectedDays);
  }

  const handleSelectMonthsChange = (selectedValues: string[]) => {
    const selectedMonths: number[] = selectedValues.map(monthName =>
      monthsOfTheYear.find(month => month.value === monthName)?.id || 0
    ).filter(id => id !== undefined) as number[];
    setSelectedMonths(selectedMonths);
  }

  const showHoursInput = ['weekly', 'daily', 'monthly']

  return (
    <form className={classes.scheduleInputs}>
      {selectedSchedule === "weekly" && (
        <AntSelect
          placeholder="Select days"
          options={daysOfTheWeek}
          onChange={handleSelectDaysChange}
        />
      )}
      {selectedSchedule === "monthly" && (
        <AntSelect
          placeholder="Select months"
          options={monthsOfTheYear}
          onChange={handleSelectMonthsChange}
        />
      )}
      {showHoursInput.includes(selectedSchedule) && (
        <label className={classes.scheduleInputs__block}>
          Hours:
          <Input type="number"
                 placeholder="Enter hours"
                 value={time.hours}
                 onChange={e => setTime({...time, hours: e.target.value})}
                 min="1"
                 max="24"
          />
        </label>
      )}
      <label className={classes.scheduleInputs__block}>
        Minutes:
        <Input type="number"
               placeholder="Enter minutes"
               value={time.minutes}
               onChange={e => setTime({...time, minutes: e.target.value})}
               min="1"
               max="59"
        />
      </label>
    </form>
  );
};

export default ScheduleInputs;