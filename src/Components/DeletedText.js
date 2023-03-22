import React from 'react';
import './DeletedText.css';

const DeletedText = (props) => {
  return <div className='deletedText'>{props.children}</div>;
};

export default DeletedText;
