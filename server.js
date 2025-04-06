const express = require('express');
const dns = require('dns');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// DNS API route
app.get('/api/dns', (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.status(400).json({ error: 'No domain provided' });
  }

  dns.lookup(domain, (err, address, family) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ address, family });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
