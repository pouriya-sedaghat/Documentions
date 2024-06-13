// data file

// document.querySelector('button').addEventListener('click', function () {
//     const ajax = new XMLHttpRequest;

//     ajax.open('GET', 'data/users.html');

//     ajax.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.querySelector('ul').innerHTML = ajax.responseText;
//         }
//     }

//     ajax.send();
// })

// document.querySelector("button").addEventListener("click", function () {
//   const ajax = new XMLHttpRequest();

//   ajax.open("GET", "../data/users.json");

//   ajax.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       const res = ajax.response;
//       // console.log(JSON.parse(res));
//       const { users } = JSON.parse(res);
//       let html = "";
//       console.log(users);
//       users.forEach((item, index) => {
//         html += `<li data-id=${item.id.toString()}>${item.first}</li>`;
//         // console.log(html);
//         document.querySelector("ul").innerHTML = html;
//       });
//     }
//   };

//   ajax.send();
// });

// fake api

document.querySelector("button").addEventListener("click", function () {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", "http://localhost:5000/users");

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = ajax.response;
      // console.log(JSON.parse(res));
      const users = JSON.parse(res);
      let html = "";
      console.log(users);
      users.forEach((item, index) => {
        html += `<li data-id=${item.id.toString()}>${item.first}</li>`;
        // console.log(html);
        document.querySelector("ul").innerHTML = html;
      });
    }
  };

  ajax.send();
});
