import React, {useState} from 'react';

import {useDispatch} from "react-redux";

import ScheduleSelection from "./ScheduleSelection/ScheduleSelection";
import ScheduleInputs from "./ScheduleInputs/ScheduleInputs";
import Input from "../../UI/Input/Input";

import {loadCronLine} from "../../store/actions/loadCronLine";

import classes from "./ScheduleEditor.module.scss";

const ScheduleEditor = () => {
  const [selectedSchedule, setSelectedSchedule] = useState('everySelectedMinutes') //выбор расписания
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]) //выбранные месяцы
  const [selectedDays, setSelectedDays] = useState<number[]>([]) //выбранные дни
  const [time, setTime] = useState({hours: '', minutes: ''})
  const [cronLine, setCronLine] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const generateCronLine = () => {
    let generatedCronLine = '';

    switch (selectedSchedule) { //взависимости от выбранного расписания, будет использованы разные типы строк
      case 'everySelectedMinutes':
        generatedCronLine = `*/${time.minutes} * * * *`
        break
      case 'weekly':
        const selectedDaysCronFormat = selectedDays.join(",");
        generatedCronLine = `${time.minutes} ${time.hours} * * ${selectedDaysCronFormat}`;
        break;
      case 'daily':
        generatedCronLine = `${time.minutes} ${time.hours} * * *`
        break
      case 'monthly':
        const selectedMonthsCronFormat = selectedMonths.join(",");
        generatedCronLine = `${time.minutes} ${time.hours} * ${selectedMonthsCronFormat} *`
        break
      default:
        generatedCronLine = `* * * * *`
    }

    //валидация нашей CRON-строки по регулярному выражению
    const regExp = /(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)|((((\d+,)+\d+|(\d+(\/|-)\d+)|\d+|\*) ?){5,7})/
    if (regExp.test(generatedCronLine)) {
      setError('')
      setTime({hours: '', minutes: ''})
      setCronLine(generatedCronLine)
      return true
    } else {
      setError('Invalid Cron line')
      return false
    }

  }

  const loadCurrentCronLine = () => { //если наша CRON-строка валдина, то сохраняем её в Редакс store
    dispatch(loadCronLine(cronLine))
  }

  return (
    <main className={classes.main}>
      <section className={classes.wrapper}>
        <div className={classes.schedule}>
          <h2 className={classes.schedule__title}>
            Schedule
          </h2>
          <div className={classes.schedule__edit}>
            <ScheduleSelection
              selectedSchedule={selectedSchedule}
              setSelectedSchedule={setSelectedSchedule}
            />
            <ScheduleInputs
              setSelectedMonths={setSelectedMonths}
              setSelectedDays={setSelectedDays}
              time={time}
              setTime={setTime}
              selectedSchedule={selectedSchedule}
            />
          </div>
        </div>
        <div className={classes.scheduleActions}>
          <button type="submit"
                  className={classes.scheduleActions__save}
                  onClick={generateCronLine}
          >
            Save
          </button>
          <button type="submit"
                  className={classes.scheduleActions__load}
                  onClick={loadCurrentCronLine}
                  disabled={!!error}
          >
            Load
          </button>
        </div>
        <Input
          type="text"
          placeholder="CRON line"
          value={cronLine}
          onChange={e => setCronLine(e.target.value)}
          style={{
            outline: !!error ? '1.5px solid red' : '',
            color: !!error ? 'red' : ''
        }}
        />
        {error &&
          <div style={{color: 'red'}}>
            {error}
          </div>
        }
      </section>
    </main>
  );
};

export default ScheduleEditor;