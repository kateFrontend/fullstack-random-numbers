import React from "react";
import { getRandomNumbers } from "../services/common.services";

const RandomNumbers = () => {
  const [data, setData] = React.useState();

  const setRandomNumbers = () => {
    getRandomNumbers()
      .then((res) => {
        console.log(res);
        setData(res.data.result);
      })
      .catch((err) => console.error(err));
  };

  const renderHtml = () => {
    if (!data) {
      return (
        <div className="number-box">
          <div className="number"></div>
          <div className="number"></div>
        </div>
      );
    }
    const { firstNumber, secondNumber } = data;

    if (firstNumber === secondNumber) {
      return (
        <div className="number-box">
          <div className="number main-color">{firstNumber}</div>
          <div className="number main-color">{secondNumber}</div>
        </div>
      );
    } else {
      return (
        <div className="number-box">
          <div className="number color">{firstNumber}</div>
          <div className="number color">{secondNumber}</div>
        </div>
      );
    }
  };

  return (
    <>
      {renderHtml()}
      <button onClick={setRandomNumbers} className="btn">
        Get number
      </button>
    </>
  );
};

export default RandomNumbers;
