import React from 'react';

const userinput = (props) => {
    return(
        <input style={props.style} type="text" value={props.value} onChange={props.changed}/>
    );
};

export default userinput;