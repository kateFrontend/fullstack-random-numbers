import React from "react";
import { getRandomNumbersList } from "../services/common.services";

const RandomNumbersList = () => {
  const [data, setData] = React.useState();

  const setRandomNumbersList = () => {
    getRandomNumbersList()
      .then((res) => {
        console.log(res);
        setData(res.data.result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button className="btn" onClick={setRandomNumbersList}>
        Show numbers list
      </button>
      <ul>
        {data &&
          data.map((number, index) => {
            return (
                <li key={index}>
                <span>{number.firstNumber} : </span>
                <span>{number.secondNumber}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RandomNumbersList;
