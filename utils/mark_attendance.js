const { By } = require("selenium-webdriver");
const { logger, click } = require("./shared.js");

// Function to mark attendance
async function markAttendance(driver, markType) {
    /**
     * Automates the attendance marking process by clicking the necessary elements.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {string} markType Type of attendance mark to select ('In' for entry, 'Out' for exit).
     */

    await clickMarkAttendance(driver);
    await clickMarkTypeSelector(driver, markType);
    await finishMarkAttendance(driver);

    await driver.sleep(15000); // Wait for the page to load
    logger.info("Mark attendance process finished successfully.");
}

// Function to click the mark attendance button
async function clickMarkAttendance(driver) {
    /**
     * Clicks the button to start the attendance marking process.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     */

    // Click the mark attendance button
    logger.info("Clicking the mark attendance button.");

    await click(driver, By.xpath('//button[@data-cy="pdt-mark-attendance"]')); // Click the mark attendance button

    logger.info("Mark attendance button clicked successfully.");
}

// Function to select the attendance mark type
async function clickMarkTypeSelector(driver, markType) {
    /**
     * Selects the specified attendance mark type from the available options.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {string} markType Type of attendance mark to select ('In' for entry, 'Out' for exit).
     */

    await driver.sleep(2000);

    // Click the mark type selector and select the specified mark type
    logger.info(`Entering the mark type "${markType}".`);

    await click(driver, By.xpath('//input[@placeholder="Marca"]')); // Click the mark type selector

    if (markType === "In") {
        await click(driver, By.xpath('//span[text()="Entrada"]')); // Select the "In" mark type
    } else if (markType === "Out") {
        await click(driver, By.xpath('//span[text()="Salida"]')); // Select the "Out" mark type
    }

    logger.info(`Mark type "${markType}" entered successfully.`);
}

// Function to click the finish mark button
async function finishMarkAttendance(driver) {
    /**
     * Clicks the button to complete the attendance marking process.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     */

    // Click the finish mark button
    logger.info("Clicking the finish mark button.");

    await click(driver, By.xpath('//button[@data-cy="pdt-mark-confirmMarkAttendance"]')); // Click the finish mark button

    logger.info("Finish mark button clicked successfully.");
}

module.exports = { markAttendance };
