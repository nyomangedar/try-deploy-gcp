const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const message = "test with jenkins";
    res.json(message);
});
