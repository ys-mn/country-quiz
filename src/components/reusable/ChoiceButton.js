import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
export default function Choice({ id, text, clicked, handleClick, state }) {
  const setAnswer = () => {
    handleClick(id);
  };

  return (
    <button
      onClick={setAnswer}
      className={`q-choice ${
        state === true ? 'right' : clicked ? 'wrong' : ''
      }`}
    >
      <p className="id">
        {String.fromCharCode(parseInt(id) + 'A'.charCodeAt(0))}
      </p>
      <p>{text}</p>
      {state === true ? (
        <CheckCircleOutlineIcon className="icon" />
      ) : clicked ? (
        <HighlightOffIcon className="icon" />
      ) : undefined}
    </button>
  );
}
