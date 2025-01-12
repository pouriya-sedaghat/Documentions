// /**
//  * @jest-environment jsdom
//  */

// const {
//   generateText,
//   validateAndGenerate,
//   createNewElement,
//   outputTitle,
// } = require("./util");

const puppeteer = require("puppeteer");

// Unit Test

// test("Generate Text", () => {
//   const text = generateText("Book One", "100,000");

//   expect(text).toBe("Title is Book One, Price is 100,000.");
// });

// test("Create New Element", () => {
//   const newElement = createNewElement(
//     "li",
//     "Title is Book One, Price is 100,000.",
//     "list-item"
//   );

//   expect(newElement).not.toBeNull();
// });

// Integration Test

// test("Validate And Generate Text", () => {
//   const text = validateAndGenerate("Book One", "100,000");

//   expect(text).toBe("Title is Book One, Price is 100,000.");
// });

// End To End Test (E2E Test)

test("UI Test", async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/users/zahra/.cache/puppeteer/chrome/chrome.exe",
    headless: false,
    slowMo: 80,
    arg: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:3000/");

  await page.click("#title");
  await page.type("#title", "Book One");
  await page.click("#price");
  await page.type("#price", "100000");

  await page.click("#submit");
}, 11000);

// Async Test

// test("API Test", () => {
//   outputTitle().then((title) => {
//     expect(title).toBe("delectus aut autem");
//   });
// });
