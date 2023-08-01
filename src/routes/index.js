const express = require("express");
const todoRoutes = require("./Todos.routes");
const router = express.Router();

const defaultRoutes = [
    {
        path: "/todo",
        route: todoRoutes,
    },
    {
        path: "",
        route: express.Router().get("", (req, res) => {
            res.status(200).json({ success: true, message: "All Working..." });
        }),
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
