var express = require('express');
var router = express.Router();
const CSVService = require('../services/CSVService');
const jwt = require('jsonwebtoken');

// Function to determine provider based on JWT token
function determineProvider(req) {
    // Extract JWT token from request headers
    const token = req.headers.authorization.split(' ')[1]; // Assuming token is included in Authorization header

    // Decode JWT token
    const decodedToken = jwt.decode(token);

    // Extract provider information from token payload
    return decodedToken.provider; // Assuming provider information is included in token payload
}
// POST /api/users
// Save user data to CSV file
router.post('/login', async (req, res) => {
  try {
    // Extract user data from request body
    const userData = req.body;

    // Determine provider based on authentication mechanism
    const provider = determineProvider(req); // Implement determineProvider function

    // Add provider to user data
    userData.provider = provider;

    // Save user data to CSV file
    await CSVService.saveUserDataToCSV(userData);

    // Respond with success message
    res.status(200).json({ message: 'User data saved to CSV file successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
