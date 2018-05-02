import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return(
        <div className="UserOutput">
            <p>This is {props.username}'s PARAGRAPH 1</p>
            <p>and this is PARAGRAPH 2</p>
        </div>
    );
};

export default useroutput;