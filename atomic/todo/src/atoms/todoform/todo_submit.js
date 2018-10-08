import React from 'react';
const Formbutton = ({buttontext, buttontype}) => (
    <button className="button-class" type={buttontype}>{buttontext}</button>
);

export default Formbutton;