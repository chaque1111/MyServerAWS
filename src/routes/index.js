const Router = require("express");
const clientes = require("./clientes");
const router = Router();

router.get("/", (req, res) => {
  res.send("hola bienvenido a aws");
});
router.use("/clientes", clientes);

module.exports = router;
