import React, { useState, useEffect } from 'react';

function Slides({ slides }) {
  const [index, setIndex] = useState(0);
  const [isRestartDisabled, setIsRestartDisabled] = useState(true);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const onClickRestart = () => {
    if (0 < index) {
      setIndex(0);
    }
  };

  const onClickPrev = () => {
    if (0 < index) {
      setIndex(prevState => prevState - 1);
    }
  };

  const onClickNext = () => {
    if (index < slides.length - 1) {
      setIndex(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    if (index === 0) {
      setIsRestartDisabled(true);
      setIsPrevDisabled(true);
      setIsNextDisabled(false);
    } else if (index === slides.length - 1) {
      setIsRestartDisabled(false);
      setIsPrevDisabled(false);
      setIsNextDisabled(true);
    } else {
      setIsRestartDisabled(false);
      setIsPrevDisabled(false);
      setIsNextDisabled(false);
    }
  }, [index, slides]);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={isRestartDisabled}
          data-testid="button-restart"
          className={`small outlined ${isRestartDisabled && 'disabled'}`}
          onClick={onClickRestart}
        >
          Restart
        </button>
        <button
          disabled={isPrevDisabled}
          data-testid="button-prev"
          className={`small ${isPrevDisabled && 'disabled'}`}
          onClick={onClickPrev}
        >
          Prev
        </button>
        <button
          disabled={isNextDisabled}
          data-testid="button-next"
          className={`small ${isNextDisabled && 'disabled'}`}
          onClick={onClickNext}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
