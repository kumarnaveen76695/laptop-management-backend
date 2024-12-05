const db = require('../config/db');

// Get all laptops
exports.getLaptops = (req, res) => {
    db.query('SELECT * FROM laptops', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Add a laptop
exports.addLaptop = (req, res) => {
    const { brand, model, serialNumber, status, purchaseDate } = req.body;
    db.query(
        'INSERT INTO laptops (brand, model, serialNumber, status, purchaseDate) VALUES (?, ?, ?, ?, ?)',
        [brand, model, serialNumber, status, purchaseDate],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Laptop added successfully.' });
        }
    );
};

// Update a laptop
exports.updateLaptop = (req, res) => {
    const { id } = req.params;
    const { brand, model, serialNumber, status, purchaseDate } = req.body;
    db.query(
        'UPDATE laptops SET brand = ?, model = ?, serialNumber = ?, status = ?, purchaseDate = ? WHERE id = ?',
        [brand, model, serialNumber, status, purchaseDate, id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Laptop updated successfully.' });
        }
    );
};

// Delete a laptop
exports.deleteLaptop = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM laptops WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Laptop deleted successfully.' });
    });
};
