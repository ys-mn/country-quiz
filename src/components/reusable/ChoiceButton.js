import React from 'react';
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
    </button>
  );
}
