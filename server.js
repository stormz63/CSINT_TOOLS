const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/analyze-ip/:ip", (req, res) => {
    const ip = req.params.ip;

    const result = {
        ip: ip,
        status: "safe",
    };

    res.json(result);
});

app.listen(port, () => {
    console.log(`CSINT Tools app listening at http://localhost:${port}`);
});
