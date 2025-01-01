const { fetchData } = require("./http");

const generateText = (title, price) => {
  return `Title is ${title}, Price is ${price}.`;
};

const inputValidation = (value, notEmpty, isNumber) => {
  if (!value) return false;
  if (notEmpty && value.trim().length === 0) return false;
  if (isNumber && value === NaN) return false;
  return true;
};

const createNewElement = (type, text, className) => {
  const newListItem = document.createElement(type);

  newListItem.textContent = text;
  newListItem.classList.add(className);

  return newListItem;
};

const validateAndGenerate = (title, price) => {
  if (
    !inputValidation(title, true, false) ||
    !inputValidation(price, true, true)
  )
    return alert("Input Is Invalid");

  return generateText(title, price);
};

const outputTitle = () => {
  return fetchData().then((data) => data.title);
};

exports.generateText = generateText;
exports.validateAndGenerate = validateAndGenerate;
exports.createNewElement = createNewElement;
exports.outputTitle = outputTitle;
