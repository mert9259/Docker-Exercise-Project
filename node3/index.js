const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hi Mert");
});

app.listen(PORT, () => {
    console.log(`Started listening port: ${PORT}`);
});