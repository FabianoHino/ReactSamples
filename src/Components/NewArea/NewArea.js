
import React, { useState } from 'react';
import AreaForm from './AreaForm';
const NewArea = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveAreaDataHandler = (enteredAreaData) => {
        const areaData = {
          ...enteredAreaData,
          id: Math.random().toString(),
        };
        props.onAddArea(areaData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    
    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    return (
        <div className='NewArea'>
          {!isEditing && (
            <button onClick={startEditingHandler}>Add New Area</button>
          )}
          {isEditing && (
            <AreaForm
              onSaveAreaData={saveAreaDataHandler}
              onCancel={stopEditingHandler}
            />
          )}
        </div>
      );
}

export default NewArea;