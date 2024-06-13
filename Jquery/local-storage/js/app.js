const $table = $("table");
const $first_name = $("#first-name");
const $last_name = $("#last-name");
const $age = $("#age");
const $city = $("#city");
const $form = $("form");

// get data

function getData() {
  var html = "Loading ...";
  $("table")
    .find("tbody")
    .html('<tr><td colspan="5">' + html + "</td></tr>");

  const jsonData = localStorage.getItem("users");
  const data = JSON.parse(jsonData) || [];

  $.each(data, (index, item) => {
    html +=
      '<tr data-id="' +
      (index + 1) +
      '"><td style="border: 1px solid black;border-collapse: collapse; padding: 10px;">' +
      item.firstname +
      '</td><td style="border: 1px solid black;border-collapse: collapse; padding: 10px;">' +
      item.lastname +
      '</td><td style="border: 1px solid black;border-collapse: collapse; padding: 10px;">' +
      item.age +
      '</td><td style="border: 1px solid black;border-collapse: collapse; padding: 10px;">' +
      item.city +
      '</td><td style="border: 1px solid black;border-collapse: collapse; padding: 10px;"><button class="edit" style="color:blue;margin:0 2.5px">Edit</button><button class="delete" style="color:red;margin:0 2.5px">Delete</button></td></tr>';
  });

  $table.find("tbody").html(html);
}
getData();

// form submit

$form.on("submit", (e) => {
  e.preventDefault();

  const firstname = $first_name.val();
  const lastname = $last_name.val();
  const age = $age.val();
  const city = $city.val();

  const newUser = { firstname, lastname, age, city };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  getData();
});

$table.find("tbody").on("click", ".delete", function () {
  const indexArr = $(this).closest("tr").data("id") - 1;

  const users = JSON.parse(localStorage.getItem("users"));
  users.splice(indexArr, 1);

  localStorage.setItem("users", JSON.stringify(users));

  getData();
});

$table.find("tbody").on("click", ".edit", function () {
  const firstname = prompt("Enter Your New First Name");
  const lastname = prompt("Enter Your New Last Name");
  const age = prompt("Enter Your New Age");
  const city = prompt("Enter Your New City");

  const newUser = { firstname, lastname, age, city };

  const indexArr = $(this).closest("tr").data("id") - 1;

  const users = JSON.parse(localStorage.getItem("users"));
  users.splice(indexArr, 1, newUser);

  localStorage.setItem("users", JSON.stringify(users));

  getData();
});
