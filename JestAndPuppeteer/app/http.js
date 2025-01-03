const axios = require("axios");

const fetchData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.data);
};

exports.fetchData = fetchData;
