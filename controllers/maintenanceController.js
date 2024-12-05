const db = require('../config/db');

// Add a maintenance log
exports.addMaintenanceLog = (req, res) => {
    const { laptopId, issueDescription, resolution, dateLogged } = req.body;
    db.query(
        'INSERT INTO maintenance_logs (laptopId, issueDescription, resolution, dateLogged) VALUES (?, ?, ?, ?)',
        [laptopId, issueDescription, resolution, dateLogged],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Maintenance log added successfully.' });
        }
    );
};

// View maintenance history
exports.getMaintenanceHistory = (req, res) => {
    db.query('SELECT * FROM maintenance_logs', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Report an issue
exports.reportIssue = (req, res) => {
    const { laptopId, issueDescription } = req.body;
    db.query(
        'INSERT INTO maintenance_logs (laptopId, issueDescription, dateLogged) VALUES (?, ?, NOW())',
        [laptopId, issueDescription],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Issue reported successfully.' });
        }
    );
};
