import React, { useState } from 'react';
import AreasCard from './AreasCard';

import "./AreasPlaceholder.css"

function AreasPlaceholder (props){


    return (
        <div className={props.className}>
            <div>Monitoring Areas</div>
            {
                props.userAreas.map(
                    (areas) => {
                        return <AreasCard label={areas.label} date={areas.date} dateFrom={areas.dateFrom} dateTo={areas.dateTo} />
                    }
                )
            }
        </div>
    );
}

export default AreasPlaceholder;