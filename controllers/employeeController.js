const db = require('../config/db');

// Get all employees
exports.getEmployees = (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Assign a laptop
exports.assignLaptop = (req, res) => {
    const { employeeId, laptopId, assignmentDate } = req.body;
    db.query(
        'INSERT INTO assignments (employeeId, laptopId, assignmentDate) VALUES (?, ?, ?)',
        [employeeId, laptopId, assignmentDate],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Laptop assigned successfully.' });
        }
    );
};

// Fetch laptops assigned to an employee
exports.getEmployeeLaptops = (req, res) => {
    const { employeeId } = req.params;
    db.query(
        'SELECT * FROM laptops INNER JOIN assignments ON laptops.id = assignments.laptopId WHERE assignments.employeeId = ?',
        [employeeId],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
};
