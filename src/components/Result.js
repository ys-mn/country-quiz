import React from 'react';
import picture from '../assets/images/undraw_winners_ao2o2.svg';
export default function Result({ count, handleTryAgain }) {
  return (
    <div className="res">
      <img className="res-img" src={picture} alt="result" />
      <h2 className="res-title">Result</h2>
      <div className="res-text">
        You got
        <p className="res-count">{count}</p>
        correct answer{count > 1 && 's'}.
      </div>
      <button onClick={handleTryAgain} className="res-try-again">
        Try Again
      </button>
    </div>
  );
}
