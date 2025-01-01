const {
  //   generateText,
  validateAndGenerate,
  createNewElement,
  outputTitle,
} = require("./util");

const app = () => {
  const from = document.querySelector("form");
  const btn = document.querySelector("#get-data");

  from.addEventListener("submit", submitHandler);
  btn.addEventListener("click", getData);
};

const submitHandler = (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#title");
  const priceInput = document.querySelector("#price");

  const uList = document.querySelector("#list");

  const title = titleInput.value;
  const price = priceInput.value;

  //   const text = generateText(title, price);
  const text = validateAndGenerate(title, price);

  const newElement = createNewElement("li", text, "list-item");

  uList.append(newElement);
};

const getData = () => {
  outputTitle().then((title) => {
    alert(title);
  });
};

app();
