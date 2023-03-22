import React from 'react';
import './AboutModal.css';

const AboutModal = (props) => {
  const aboutModalClickHandler = (e) => {
    props.setAboutModalIsOn(!props.aboutModalIsOn);
    // I let it bubble becasue it doesn't matter, it's just an info modal.
  };
  return (
    <div className='aboutModalBG' onClick={aboutModalClickHandler}>
      <div className='aboutModalCard'>
        <h2>What is diff checker?</h2>
        <p>
          Diff Checker is a data comparison tool that computes and shows the
          differences between the contents of files. Diff is commonly used to
          illustrate the differences between two versions of the same file.
        </p>
        <h2>How to use diff checker?</h2>
        <p>
          To use diff checker all you have to do is copy and paste the content
          of the files in the input boxes and diff will be generated
          automatically, when you click the "Diff" button. If there is a diff,
          it will be highlighted appropriately. Whatever is added, it is shown
          in green, but if something is removed, it is shown as being deleted
          and shown in red.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
