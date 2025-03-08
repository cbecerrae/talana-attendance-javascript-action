const core = require('@actions/core');
const { getDriver } = require('./utils/chrome.js');
const { login } = require('./utils/login.js');
const { markAttendance } = require('./utils/mark_attendance.js');
const { logger } = require('./utils/shared.js');

async function main() {
    /**
     * Main function that executes the attendance marking process.
     *
     * This function is invoked by GitHub Actions and expects its input as environment variables.
     * It initializes a headless Chrome browser using Puppeteer, performs user authentication,
     * and marks attendance based on the specified type ('In' or 'Out').
     *
     * If an exception occurs during execution, it logs the error and exits with a non-zero status.
     */

    // Extract input parameters provided by GitHub Actions
    const email = core.getInput('attendance_email'); // User email for authentication
    const password = core.getInput('attendance_password'); // User password for authentication
    const type = core.getInput('attendance_type'); // Attendance type: 'In' or 'Out'
    const chromePath = core.getInput('chrome_path'); // Path to the Chrome binary
    const chromedriverPath = core.getInput('chromedriver_path');  // Path to the ChromeDriver binary

    // Validate required parameters
    if (!email || !password || !type) {
        console.error('Missing required environment variables.');
        process.exit(1);
    }

    // Launch a new ChromeDriver instance with the specified chromePath
    let driver = await getDriver(chromePath, chromedriverPath);

    try {
        // Perform login operation
        await login(driver, email, password);

        // Mark attendance based on the provided type
        await markAttendance(driver, type);
    } catch (error) {
        // Log any encountered errors
        logger.error(`Exception caught: ${error.message}`);
        logger.error(`Stack Trace: ${error.stack}`);
        process.exit(1);
    } finally {
        // Ensure the browser is closed to free up resources
        await driver.quit();
    }

    // Set the output for the GitHub Actions workflow
    const time = (new Date()).toTimeString();
    core.setOutput("attendance_time", time);
}

// Execute the main function when the script is run directly
if (require.main === module) {
    main();
}
