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

  $.ajax({
    url: "http://localhost:5000/users",
    method: "GET",
    success: (response) => {
      $.each(response, (index, item) => {
        html +=
          '<tr data-id="' +
          item.id +
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
      $("table").find("tbody").html(html);
    },
    error: (err) => {
      console.log(err);
    },
  });
}
getData();

// form submit

$form.on("submit", (e) => {
  e.preventDefault();

  const FIRST_NAME = $first_name.val();
  const LAST_NAME = $last_name.val();
  const AGE = $age.val();
  const CITY = $city.val();

  // console.log(FIRST_NAME, LAST_NAME, AGE, CITY);

  $.ajax({
    url: "http://localhost:5000/users",
    method: "POST",
    data: {
      firstname: FIRST_NAME,
      lastname: LAST_NAME,
      age: AGE,
      city: CITY,
    },
    success: (response) => {
      console.log(response);
      getData();
    },
    error: (err) => {
      console.log(err);
    },
  });
});

$table.find("tbody").on("click", ".delete", function () {
  const id = $(this).closest("tr").data("id");

  $.ajax({
    url: "http://localhost:5000/users/" + id,
    method: "DELETE",
    success: (response) => {
      // getData();
    },
    error: (err) => {
      console.log(err);
    },
  });
});

$table.find("tbody").on("click", ".edit", function () {
  const id = $(this).closest("tr").data("id");

  const new_first_name = prompt("Enter You New First Name :");
  const new_last_name = prompt("Enter You New Last Name :");
  const new_age = prompt("Enter You New Age :");
  const new_city = prompt("Enter You New city :");

  // $.ajax({
  //     url: 'http://localhost:5000/users/' + id,
  //     method: 'PUT',
  //     data: {
  //         firstname: new_first_name,
  //         lastname: new_last_name,
  //         age: new_age,
  //         city: new_city
  //     },
  //     success: (response) => {
  //         getData();
  //     },
  //     error: (err) => { console.log(err); }
  // });

  $.ajax({
    url: "http://localhost:5000/users/" + id,
    method: "PATCH",
    data: {
      firstname: new_first_name,
      lastname: new_last_name,
      age: new_age,
      city: new_city,
    },
    success: (response) => {
      getData();
    },
    error: (err) => {
      console.log(err);
    },
  });
});
