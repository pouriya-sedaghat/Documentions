// Static API Route

// function handler(req, res) {
//   res.json({ massage: "Static API Route." });
// }

// Parsing Request

// function handler(req, res) {
//   if (req.method === "POST") {
//     const title = req.body.title;
//     const price = req.body.price;

//     const newProduct = { title, price };

//     const products = [];
//     products.push(newProduct);

//     console.log(products);

//     res.json("Product Added.");
//   }
// }

// Save Data In File

// import fs from "fs";
// import path from "path";

// function handler(req, res) {
//   const filePath = path.join(process.cwd(), "data", "products.json");

//   const jsonData = fs.readFileSync(filePath);
//   const data = JSON.parse(jsonData);

// if (req.method === "POST") {
//   const title = req.body.title;
//   const price = req.body.price;

//   const newProduct = { title, price };

//   data.push(newProduct);

//   fs.writeFileSync(filePath, JSON.stringify(data));

//   res.json(jsonData);
// } else {
//   // Get Data

//   res.send(data);
// }
// }

// Save Data In MongoDB

// import { MongoClient } from "mongodb";

// Optimization : utils

import db from "../../utils/db";

async function handler(req, res) {
  // const client = await MongoClient.connect(
  //   "mongodb://127.0.0.1:27017/shopping"
  // );
  // const db = client.db();

  const dbb = await db.connect();

  if (req.method === "POST") {
    const { title, price } = req.body;

    // const data = await db.collection("products").insertOne({ title, price });
    const data = await dbb.collection("products").insertOne({ title, price });

    res.send(data);
  } else {
    //  Get Data

    // const products = await db.collection("products").find().toArray();
    const products = await dbb.collection("products").find().toArray();

    res.send(products);
  }
}

export default handler;
