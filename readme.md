


Here are the Postman URLs and methods:


User Registration:
POST - http://localhost:5000/api/auth/register
User Login:
POST - http://localhost:5000/api/auth/login
Laptop Management Endpoints
Get All Laptops:
GET - http://localhost:5000/api/laptops
Add a Laptop:
POST - http://localhost:5000/api/laptops
Update a Laptop:
PUT - http://localhost:5000/api/laptops/:id
Delete a Laptop:
DELETE - http://localhost:5000/api/laptops/:id
Employee Management Endpoints
Get All Employees:
GET - http://localhost:5000/api/employees
Assign a Laptop to an Employee:
POST - http://localhost:5000/api/employees/assign
Get Laptops Assigned to an Employee:
GET - http://localhost:5000/api/employees/:id/laptops
Maintenance and Issue Reporting Endpoints
Add a Maintenance Log:
POST - http://localhost:5000/api/maintenance
View Maintenance History:
GET - http://localhost:5000/api/maintenance/history/:laptopId
Report an Issue:
POST - http://localhost:5000/api/issues
