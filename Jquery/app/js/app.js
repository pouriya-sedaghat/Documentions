// jquery

// jquery selector

// const $jqueryObject = $("#p1");
// console.log($jqueryObject); // jquery object

// tips

// jquery object to DOMnode

// const $jqueryObject = $("#p1")[0];
// console.log($jqueryObject); // DOMnode

// DOMnode to jquery object

// console.log($($jqueryObject));

// combinators

// console.log($("h2 i"));
// console.log($("h2>i"));
// console.log($("h2+i"));
// console.log($("h2~i"));

// pseudo class

// console.log($("h2>i:first-of-type"));
// console.log($("h2>i:last-of-type"));
// console.log($("h2>i:nth-of-type(odd)"));
// console.log($("h2>i:nth-of-type(even)"));
// console.log($("h2>i:not(&:first-of-type)"));
// console.log($("h2>i:first-child"));
// console.log($("h2>i:last-child"));
// console.log($("h2>i:nth-child(odd)"));
// console.log($("h2>i:nth-child(even)"));
// console.log($("h2>i:not(&:first-child)"));

// has find parents parent closest

// $("div").has("ul").length; // div has ul => clild element
// $("div").find("ul"); // select child element
// $("i").closest("h2"); // select parents element
// $("i").parents("h2"); // select parents element
// $("i").parent("h2"); // select parent element

// tips

// optimaizition

// {}

//  jquety object =>  properies and methods

// jquery object and js code

// access to content

// const $heading2 = $("h2");

// console.log($($heading2[0]).text());

// const $input = $("input");

// console.log($($input[0]).val());

// $($heading2[0]).text('Hello');
// $($heading2[1]).text('Bye');

// $input.val('harchi');

// events

// inline

// function f1() {
//   console.log("onClick");
// }

// external

// const $btn = $("button");

// method one

// $btn.click(() => {
//     console.log('onClick');
// });

// function dec() {
//   console.log("onClick");
// }

// $($btn[1]).on("click", dec);
// $($btn[1]).on("click", function () {
//   console.log("onClick");
// });
// $($btn[1]).on("click", () => {
//   console.log("onClick");
// });
// $($btn[1]).on("contextmenu", () => {
//   console.log("onContextmenu");
// });
// $($btn[1]).on("dblclick", () => {
//   console.log("onDblclick");
// });
// $($btn[1]).on("mousedown", () => {
//   console.log("onMousedown");
// });
// $($btn[1]).on("mouseup", () => {
//   console.log("onMouseup");
// });
// $($btn[1]).on("mouseenter", () => {
//   console.log("onMouseenter");
// });
// $($btn[1]).on("mouseout", () => {
//   console.log("onMouseout");
// });
// $($btn[1]).on("mouseover", () => {
//   console.log("onMouseover");
// });
// $($btn[1]).on("mouseleave", () => {
//   console.log("onMouseleave");
// });
// $($btn[1]).on("mousemove", () => {
//   console.log("onMousemovemousemove");
// });
// $($btn[1]).on("keydown", () => {
//   console.log("onKeydown");
// });
// $($btn[1]).on("keyup", () => {
//   console.log("onKeyup");
// });
// $($btn[1]).on("keypress", () => {
//   console.log("onKeypress");
// });
// $($btn[1]).on("keypress", () => {
//   console.log("onKeypress");
// });

// const $input = $("input");

// $($input[0]).on("focus", () => {
//   console.log("onFocus");
// });
// $($input[0]).on("input", () => {
//   console.log("onInput");
// });
// $($input[0]).on("change", () => {
//   console.log("onChange");
// });
// $($input[0]).on("blur", () => {
//   console.log("onBlur");
// });

// $(document).on("scroll", () => {
//   console.log("onScrool");
// });

// $(document).on("wheel", () => {
//   console.log("onWheel");
// });

// $(document).on("load", () => {
//   console.log("onLoad");
// });

// $(document).on("ready", () => {
//   console.log("onReady");
// });

// $(document).on("unload", () => {
//   console.log("onUnload");
// });

// $(document).on("resize", () => {
//   console.log("onresize");
// });

// $(document).on("reset", () => {
//   console.log("onScrool");
// });

// $("form").on("submit", () => {
//   console.log("onSubmit");
// });

// jquery effects

// $($btn[1]).on("click", () => {
//   //   $(".mix").hide("slow", () => {});
//   //   $(".mix").show("fast");
//   //   $(".mix").toggle();

//   //   $(".mix").fadeOut();
//   //   $(".mix").fadeIn();
//   //   $(".mix").fadeToggle();
//   //   $(".mix").fadeTo("slow", 0.5, () => {});

//   //   $(".mix").slideUp();
//   //   $(".mix").slideDown();
//   //   $(".mix").slideToggle();

// //   $(".mix").animate({ fontSize: "30px" }, "slow");
// });

// access to styles

// console.log($("h2").css);
// $("h2").css("color", "red");
// $("h2").css({color:'red',backgroundColor:'blue'});

// access to class

// $("button:last-of-type").on("click", () => {
// //   $($("p")[1]).addClass("harchi");
// //   $($("p")[1]).removeClass("harchi");
// //   $($("p")[1]).toggleClass("harchi");
// });

// access to attribute

// console.log($("p")[1].attr);

// $("button:last-of-type").on("click", () => {
// //   $($("p")[1]).attr("title", "Hello");
// //   $($("p")[1]).attr({ title: "Hello", style: "color:red;" });
// });

// add element

// html prepend append before after

// const users = [
//   { useename: "Pouriya Sedaghat", id: 1, age: 24 },
//   { useename: "Zahra Sedaghat", id: 2, age: 19 },
// ];

// let html = "";

// users.forEach((item) => {
//   html += `<li data-id=${item.id.toString()}>username: ${item.useename} age: ${
//     item.age
//   }</li>`;
// });

// $("div ul").html(html);
// $("div ul").prepend(html);
// $("div ul").append(html);
// $("div ul").before(html);
// $("div ul").after(html);

// access to data-...

// console.log($("div>ul>li:first-of-type").data('id'));

// remove element

// $("input").empty();
// $("input").remove();

// jquery dimension

// width hieght

// $("div").width();
// $("div").height();

// width hieght and padding

// $("div").innerWidth();
// $("div").innerHeight();

// width hieght and padding border margin

// $("div").outerWidth();
// $("div").outerHeight();

// instance :

// const $form = $("form");
// const $table = $("table");
// const $name = $("#name");
// const $family = $("#family");

// var name;
// var family;
// var html = "";

// $form.on("submit", function (e) {
//   e.preventDefault();

//   if ($name.val() && $family.val()) {
//     name = $name.val();
//     family = $family.val();
//     $name.val("");
//     $family.val("");

//     // html = '<tr data-id="' + id + '"><td style="padding:0 5px;">' + name + '</td><td style="padding:0 5px;">' + family + '</td><td><button style="color:blue;margin:0px 5px;" class="edit">Edit</button><button style="color:red;margin:0px 5px;" class="delete">Delete</button></td></tr>';
//     html =
//       '<tr><td style="padding:0 5px;">' +
//       name +
//       '</td><td style="padding:0 5px;">' +
//       family +
//       '</td><td><button style="color:blue;margin:0px 5px;" class="edit">Edit</button><button style="color:red;margin:0px 5px;" class="delete">Delete</button></td></tr>';

//     $table.find("tbody").append(html);
//   } else {
//     $name.val("");
//     $family.val("");
//     alert("Please, Enter your Name Or Family");
//   }

//   $table.find("tbody").on("click", ".edit", function () {
//     $(this)
//       .closest("tr")
//       .find("td:first-child")
//       .text(
//         prompt(
//           "Enter Your Name :",
//           $(this).closest("tr").find("td:first-child").text()
//         )
//       );
//     $(this)
//       .closest("tr")
//       .find("td:nth-child(2)")
//       .text(
//         prompt(
//           "Enter Your family :",
//           $(this).closest("tr").find("td:nth-child(2)").text()
//         )
//       );
//   });

//   $table.find("tbody").on("click", ".delete", function () {
//     $(this).closest("tr").remove();
//   });
// });
