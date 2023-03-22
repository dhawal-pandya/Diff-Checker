import React, { useState } from 'react';
import { diffChars } from 'diff';

import './DiffChecker.css';

import InsertedText from './InsertedText';
import DeletedText from './DeletedText';
import AboutModal from './AboutModal';

function DiffChecker() {
  const [aboutModalIsOn, setAboutModalIsOn] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('Diff Shows up Here..');

  const handleDiff = () => {
    const diffResult = diffChars(text1, text2);
    console.log(diffResult);
    const resultHtml = diffResult.map((part) =>
      part.added ? (
        <InsertedText>{part.value}</InsertedText>
      ) : part.removed ? (
        <DeletedText>{part.value}</DeletedText>
      ) : (
        <span>{part.value}</span>
      )
    );
    setResult(resultHtml);
  };

  return (
    <div className='high'>
      {aboutModalIsOn && (
        <AboutModal
          aboutModalIsOn={aboutModalIsOn}
          setAboutModalIsOn={setAboutModalIsOn}
        />
      )}
      <div className='navbar'>
        <div className='title'>Diff Checker</div>
      </div>

      <div className='textInput'>
        <textarea
          value={text1}
          placeholder='Text1'
          onChange={(e) => setText1(e.target.value)}
        />
        <textarea
          value={text2}
          placeholder='Text2'
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
      <div className='resultWrapper'>
        <button className='resultButton' onClick={handleDiff}>
          Diff
        </button>
        <div className='results'>
          <div
            className='about'
            onClick={() => {
              setAboutModalIsOn(!aboutModalIsOn);
            }}
          >
            ?
          </div>
          <div className='result'>{result}</div>
          <div className='suggest'>
            <span className='greenText'>Green</span>is added.
            <span className='redText'>Red</span>is removed.
          </div>
        </div>
      </div>
      <div className='outro'>
        Made with ❤️ by{' '}
        <a href='https://dhawal-pandya.github.io/'>Dhawal Pandya</a>
      </div>
    </div>
  );
}

export default DiffChecker;
