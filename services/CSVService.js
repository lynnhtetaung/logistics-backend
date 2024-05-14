const fs = require('fs');
const path = require('path');

class CSVService {
    static async saveUserDataToCSV(userData) {
        try {
            // Specify the file path within the public folder
            const filePath = path.join(__dirname, '..', 'public', 'users.csv');

            // Construct CSV data string
            const csvData = `${userData.name},${userData.email},${userData.provider}\n`;

            // Write CSV data string to file
            fs.appendFileSync(filePath, csvData);

            console.log('User data saved to CSV file successfully');
        } catch (error) {
            console.error('Error saving user data to CSV file:', error);
        }
    }
}

module.exports = CSVService;
