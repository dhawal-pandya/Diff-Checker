import React from 'react';
import './InsertedText.css';

const InsertedText = (props) => {
  return <div className='insertedText'>{props.children}</div>;
};

export default InsertedText;
