import './App.css';
import iconArrow from './images/icon-arrow.svg';
import { useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");
  
  const [resultYears, setResultYears] = useState("--");
  const [resultMonths, setResultMonths] = useState("--");
  const [resultDays, setResultDays] = useState("--");

  const [yearErrors, setYearErrors] = useState([]);
  const [monthErrors, setMonthErrors] = useState([]);
  const [dayErrors, setDayErrors] = useState([]);

  function handleCalculate() {
    let isValid = true;

    if (!years) {
      setYearErrors(["years required"]);
      isValid = false;
    } else {
      setYearErrors([]);
    }
    if (!months) {
      setMonthErrors(["months required"]);
      isValid = false;
    } else {
      setMonthErrors([]);
    }
    if (!days) {
      setDayErrors(["days required"]);
      isValid = false;
    } else {
      setDayErrors([]);
    }

    // additional validation

    if (!isValid) {
      setResultYears("--");
      setResultMonths("--");
      setResultDays("--");

      return;
    }

    const now = new moment(new Date());
    const month = parseInt(months) - 1;
    const dateMoment = new moment(new Date(years, month, days));
    const diff = moment.duration(now.diff(dateMoment));

    setResultYears(diff.years());
    setResultMonths(diff.months());
    setResultDays(diff.days());
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='age-input-wrapper'>
        <div className={(dayErrors.length > 0) ? "age-input error" : "age-input"}>
            <label htmlFor='day'>Day</label>
            <input
              id='day'
              name='day'
              type='number'
              placeholder='DD'
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            {dayErrors.length > 0 && 
              dayErrors.map((y, idx) => <p key={idx}>{y}</p>)
            }
          </div>
          <div className={(monthErrors.length > 0) ? "age-input error" : "age-input"}>
            <label htmlFor='month'>Month</label>
              <input
                id='month'
                name='month'
                type='number'
                placeholder='MM'
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />
              {monthErrors.length > 0 && 
                monthErrors.map((y, idx) => <p key={idx}>{y}</p>)
              }
          </div>
          <div className={(yearErrors.length > 0) ? "age-input error" : "age-input"}>
            <label htmlFor='year'>Year</label>
            <input
              id='year'
              name='year'
              type='number'
              placeholder='YYYY'        
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
            {yearErrors.length > 0 && 
              yearErrors.map((y, idx) => <p key={idx}>{y}</p>)
            }
          </div>
        </div>

        <div className='button-wrapper'>
          <button onClick={handleCalculate} className='button'><img src={iconArrow}/></button>
        </div>

        <div className='age-calculator'>
          <p><span>{resultYears}</span> years</p>
          <p><span>{resultMonths}</span> months</p>
          <p><span>{resultDays}</span> days</p>
        </div>
      </div>
    </div>
  );
}

export default App;
