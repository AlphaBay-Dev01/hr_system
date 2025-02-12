const express = require('express'); // Correctly require the express module
const app = express();
const cors = require('cors');
app.use(cors({origin: "*"})); // Enable cors

// Require and use route files
const infoRoutes = require('./src/route/info.route');
const authRoutes = require('./src/route/auth.route');


infoRoutes(app); // Register info routes
authRoutes(app); // Register auth routes

app.get('/api/home', (req, res) => {
    const data = [
       {
        id: 1,
        name: "Alphabay",
        gender: "Male",
        age: 25,
        email: "alphabay@gmail.com",
        phone: "09123456789"
       }
       
    ]; 
    res.json({ // Use res.json to send JSON response
        list: data
    });
});

const port = 8081;
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
