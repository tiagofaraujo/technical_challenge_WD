const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.json({ message: "Test - If you see this, your server is running" });
});

//You put the routes here
const phoneRoutes = require("./phones.routes");
router.use("/phones", phoneRoutes);

module.exports = router;