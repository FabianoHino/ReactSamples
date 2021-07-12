
import React, { useState } from 'react';

const AreaForm = (props) => {
    const [enteredLabel, setEnteredLabel] = useState('');
    const [enteredDateFrom, setDateFrom] = useState('');
    const [enteredDateTo, setDateTo] = useState('');

    const labelChangeHandler = (event) => {
        setEnteredLabel(event.target.value);
    };

    const dateFromChangeHandler = (event) => {
        setDateFrom(event.target.value);
    };

    const dateToChangeHandler = (event) => {
        setDateTo(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const areaData = {
            label: enteredLabel,
            dateFrom: new Date(enteredDateFrom),
            dateTo: new Date(enteredDateTo),
        };

        props.onSaveAreaData(areaData);
        setEnteredLabel('');
        setDateFrom('');
        setDateTo('');
    };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>

        <div>
            <label>Label</label>
            <input type='text'
            value={enteredLabel}
            onChange={labelChangeHandler}></input>
        </div>
        <div>
            <label>DateFrom</label>
            <input type='date'
            value={enteredDateFrom}
            onChange={dateFromChangeHandler}></input>
        </div>
        <div>
            <label>DateTo</label>
            <input type='date'
            value={enteredDateTo}
            onChange={dateToChangeHandler}></input>
        </div>

        <div>
            <div>Draw geometry</div>
        </div>
        
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Area</button>
      </div>
    </form>
  );
};

export default AreaForm;