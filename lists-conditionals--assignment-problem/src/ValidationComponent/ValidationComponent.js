import React from 'react';

const validationcomponent = (props) => {
    
    let message = null;

    if(props.inputLength < 5){
        message = "Text too short";
    }
    else {
        message = "Text long enough";
    }
    
    return(
        <p>{message}</p>
    );
};

export default validationcomponent;