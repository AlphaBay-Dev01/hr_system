// const fs = require("fs/promises");
// exports.logError = async (controller, message_error, res) => {
//     try {
//         const timestamp = moment().format("DD/MM/YYYY HH:mm:ss"); // Use 'moment' for formatting date and time in the log file
//         const path = "./logs/" + controller + ".txt";
//         const logMessage = "[" + timestamp + "] " + message_error + "\n";
//         await fs.appendFile(path, logMessage);
//     } catch (error) {
//         console.error("Error writing to log file:", error);
//     }

//     res.status(500).send("Internal Server Error!");
// };


const fs = require("fs/promises");
const moment = require("moment"); // Import moment for date formatting

exports.logError = async (controller, message_error, res) => {
    try {
        const timestamp = moment().format("DD/MM/YYYY HH:mm:ss");
        const path = "./logs/" + controller + ".txt";
        const logMessage = "[" + timestamp + "] " + message_error + "\n";
        await fs.appendFile(path, logMessage);
    } catch (error) {
        console.error("Error writing to log file:", error);
    }

    res.status(500).send("Internal Server Error!");
};
