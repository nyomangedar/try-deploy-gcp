const express = require("express");

const app = express();

app.listen(9000);

app.get("/", (req, res) => {
    const message = "ready";
    res.json(message);
});
