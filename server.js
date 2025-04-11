const express = require('express');
const app = express();
app.use(express.json());

let locations = [
    { name: "Hà Nội", lat: 21.0285, lng: 105.8542 },
    { name: "Đà Nẵng", lat: 16.0544, lng: 108.2022 },
    { name: "TP.HCM", lat: 10.7769, lng: 106.7009 }
];

app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = locations.filter(loc => loc.name.toLowerCase().includes(query));
    res.json(results);
});

app.listen(3000, () => console.log('Server chạy ở port 3000'));