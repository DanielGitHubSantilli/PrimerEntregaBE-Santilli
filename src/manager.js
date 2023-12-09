import { ProductManager } from "./ProductManager.js";

let CAIDIM = new ProductManager("./productos.json");

//title, description, price, thumbnail, code, stock
const Detergente = "https://i.postimg.cc/YjcjJzVC/133791-OSAS83-455.jpg";
const Cif = "https://i.postimg.cc/gcxsbc5C/cif.png";
const Ayudin = "https://i.postimg.cc/0QTwsvKv/Ayudin1-Litro.jpg"

CAIDIM.addProduct(
  "Detergente",
  "Detergente liquido",
  200,
  Detergente,
  "001",
  10
);
CAIDIM.addProduct(
  "Cif",
  "Cif 100 cm3",
  200,
  Cif,
  "004",
  10
);
CAIDIM.addProduct(
  "Ayudin",
  "Ayudin 1000 cm3",
  200,
  Ayudin,
  "005",
  10
);
