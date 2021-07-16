import React from 'react';
import ChoiceButtons from './reusable/ChoiceButton';
export default function Question({
  text,
  image,
  answers,
  rightAnswer,
  answer,
  setAnswer,
}) {
  const handleClick = (id) => {
    if (answer === undefined) {
      setAnswer(id);
    }
  };

  return (
    <>
      {image && <img className="q-img" src={image} alt="flag" />}
      <h2 className="q-title">{text}</h2>
      {answers.map((ans, idx) => (
        <ChoiceButtons
          key={idx}
          id={idx}
          clicked={answer === idx}
          state={answer === undefined ? undefined : idx === rightAnswer}
          rightAnswer={rightAnswer}
          handleClick={handleClick}
          text={ans}
        />
      ))}
    </>
  );
}
