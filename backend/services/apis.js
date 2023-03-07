const NodeCache = require("node-cache");
const cache = new NodeCache();

const getNumber = (req, res) => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);

  const firstNumber = getRandomNumber(1, 5);
  const secondNumber = getRandomNumber(1, 5);

  const getCacheNumbersList = cache.get("listNumbers");
  if (getCacheNumbersList === undefined) {
    const cachedListNumbers = cache.set("listNumbers", [
      {
        firstNumber,
        secondNumber,
      },
    ]);
  } else {
    getCacheNumbersList.push({
      firstNumber,
      secondNumber,
    });
    cache.set("listNumbers", getCacheNumbersList);
  }

  try {
    return res.status(200).json({
      status: 200,
      result: {
        firstNumber,
        secondNumber,
      },
      message: "Success",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: req.body,
      message: error.message,
    });
  }
};

const getNumbersList = (req, res) => {
  const getCacheNumbersList = cache.get("listNumbers");

  try {
    return res.status(200).json({
      status: 200,
      result: getCacheNumbersList,
      message: "Success",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: req.body,
      message: error.message,
    });
  }
};

module.exports = {
  getNumber,
  getNumbersList,
};
