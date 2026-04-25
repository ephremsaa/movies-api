const fs = require('fs').promises;
const path = require('path');

// Path to the JSON data file
const dataPath = path.join(__dirname, '..', 'movies.json');

/**
 * Reads data from the JSON file.
 * Handles cases where the file might not exist or is empty.
 * @returns {Promise<Array>} Array of movie objects
 */
async function readData() {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        return JSON.parse(data || '[]');
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File doesn't exist, create it with an empty array
            await writeData([]);
            return [];
        }
        throw error;
    }
}

/**
 * Writes data to the JSON file with pretty formatting.
 * @param {Array} data - Array of movie objects
 */
async function writeData(data) {
    try {
        // Use JSON.stringify with 2 spaces for readable JSON
        await fs.writeFile(dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        throw error;
    }
}

/**
 * Sends a structured JSON response to the client.
 * @param {http.ServerResponse} res - Response object
 * @param {number} statusCode - HTTP status code
 * @param {object} payload - Data to send (will be stringified)
 */
function sendJSON(res, statusCode, payload) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
}

/**
 * Parses the incoming HTTP request body as JSON.
 * @param {http.IncomingMessage} req - Request object
 * @returns {Promise<object>} Parsed JSON body
 */
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';

        // Listen for data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When all data is received
        req.on('end', () => {
            if (!body) {
                return resolve({});
            }
            try {
                const parsed = JSON.parse(body);
                resolve(parsed);
            } catch (error) {
                reject(new Error('Invalid JSON input'));
            }
        });

        // Handle errors
        req.on('error', error => reject(error));
    });
}

/**
 * Generates a simple pseudo-random unique ID.
 * @returns {string} Unique ID
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

module.exports = {
    readData,
    writeData,
    sendJSON,
    parseBody,
    generateId
};
