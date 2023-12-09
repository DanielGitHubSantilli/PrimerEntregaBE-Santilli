import { ProductManager } from "./ProductManager.js";

let CAIDIM = new ProductManager("./productos.json");

const Detergente = "https://i.postimg.cc/YjcjJzVC/133791-OSAS83-455.jpg";
const Cif = "https://i.postimg.cc/gcxsbc5C/cif.png";
const Ayudin = "https://i.postimg.cc/0QTwsvKv/Ayudin1-Litro.jpg"


CAIDIM.addProduct(
  "001",
  "Productos liquidos",
  "Detergente Clean",
  100,
  Detergente,
  10
);
CAIDIM.addProduct(
  "004",
  "Productos cremosos",
  "Cif 100 cm3",
  200,
  Cif,
  10
);
CAIDIM.addProduct(
  "005",
  "Productos liquidos",
  "Ayudin 1000 cm3",
  200,
  Ayudin,
  10
);

