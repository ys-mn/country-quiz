import React, { useState, useEffect } from 'react';
import axios from 'axios';
import picture from '../assets/images/undraw_adventure_4hum1.svg';
import Question from './Question';
import Result from './Result';
import loader from '../assets/images/loader.svg';
export default function MainPage() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState(undefined);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name;capital;flag')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const fourRandomNumbers = () => {
    const arr = [];
    while (arr.length < 4) {
      const n = Math.floor(Math.random() * data.length);
      if (!arr.includes(n)) arr.push(n);
    }
    return arr;
  };

  const createQ = () => {
    setLoading(true);
    const template = Math.floor(Math.random() * 2);
    const info = fourRandomNumbers();
    const ans = Math.floor(Math.random() * 4);
    // console.log(template, info, ans);
    if (template === 0) {
      const city = data[info[ans]].capital;
      const q = {
        text: `${city[0].toUpperCase() + city.slice(1)} is the capital of`,
        image: undefined,
        answers: info.map((idx) => data[idx].name),
        rightAnswer: ans,
      };
      setQuestion(q);
      setLoading(false);
    } else {
      const q = {
        text: 'Which country does this flag belongs to?',
        image: data[info[ans]].flag,
        answers: info.map((idx) => data[idx].name),
        rightAnswer: ans,
      };
      setQuestion(q);
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (answer === question.rightAnswer) {
      setCount((prev) => prev + 1);
      setAnswer(undefined);
      createQ();
    } else {
      setQuestion(undefined);
    }
  };

  const handleTryAgain = () => {
    setCount(0);
    createQ();
    setAnswer(undefined);
  };

  useEffect(() => {
    if (data.length && question === undefined) {
      createQ();
    }
  }, [data, question]);

  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>COUNTRY QUIZ</h1>
          {question && <img src={picture} alt="advanture" />}
        </div>
        <div className="body">
          {question ? (
            <>
              <Question answer={answer} setAnswer={setAnswer} {...question} />
              {answer !== undefined && (
                <button onClick={handleNext} className="next">
                  Next
                </button>
              )}
              <button onClick={handleTryAgain} className="try-again">
                Try Again
              </button>
            </>
          ) : loading ? (
            <div className="loader">
              <img src={loader} alt="loading" />
            </div>
          ) : (
            <Result count={count} handleTryAgain={handleTryAgain} />
          )}
        </div>
      </div>
      <h6 className="credits">
        created by <b>Ysmn</b> - devChallenges.io
      </h6>
    </>
  );
}
