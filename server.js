const express = require("express");
const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Endpoint for IP address analysis (dummy endpoint for now)
app.get("/analyze-ip/:ip", (req, res) => {
    const ip = req.params.ip;

    // A real analysis tool would go here (e.g., call a threat intel API)
    // For now, we're just mocking a response
    const result = {
        ip: ip,
        status: "safe",  // In a real-world scenario, you'd query threat intelligence APIs here
    };

    // Send back the result as JSON
    res.json(result);
});

// Start the server
app.listen(port, () => {
    console.log(`CSINT Tools app listening at http://localhost:${port}`);
});
