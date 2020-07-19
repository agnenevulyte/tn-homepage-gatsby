import React from 'react';
import './button.css';

function LinkButton({ text, destination, secondary }) {
return (
     <React.Fragment>
            <a className={secondary ? "btn btn--secondary" : "btn btn--text"} href={destination}>{text}</a>
     </React.Fragment>
);
}
export default LinkButton;