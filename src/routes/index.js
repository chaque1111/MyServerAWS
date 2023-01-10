const Router = require("express");
const clientes = require("./clientes");
const router = Router();

router.use("/clientes", clientes);

module.exports = router;
