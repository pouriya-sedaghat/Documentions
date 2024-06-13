// Dynamic API Route

import fs from "fs";
import path from "path";

function handler(req, res) {
  const id = req.query.productId;

  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  const product = data.find((item) => item.id === id);

  res.send(product);
}

export default handler;
