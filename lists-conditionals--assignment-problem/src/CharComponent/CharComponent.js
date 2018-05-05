import React from 'react';

import './CharComponent.css';

const charcomponent = (props) => {
    
    return(
        <p onClick={props.click} className="CharComponent">{props.char}</p>
    );
};

export default charcomponent;