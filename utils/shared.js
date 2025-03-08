const { until } = require("selenium-webdriver");
const log4js = require("log4js");

// Function to send keys to an input element
async function sendKeys(driver, locator, keys) {
    /**
     * Waits until the specified element is clickable and then sends the given text input.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {Tuple} locator Tuple (By.<METHOD>, value) used to locate the element.
     * @param {string} keys The text to be sent to the located element.
     */

    // Wait until the element is clickable, then send the values
    await driver.wait(until.elementLocated(locator), 30000);
    await driver.wait(until.elementIsEnabled(driver.findElement(locator)), 30000);
    await driver.sleep(2000); // Wait an additional 2 seconds before sending the values
    await driver.findElement(locator).sendKeys(keys); // Send the values to the located element
}

// Function to click on an element
async function click(driver, locator) {
    /**
     * Waits until the specified element is clickable and then performs a click action.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {Tuple} locator Tuple (By.<METHOD>, value) used to locate the element.
     */

    // Wait until the element is clickable, then click
    await driver.wait(until.elementLocated(locator), 30000);
    await driver.wait(until.elementIsEnabled(driver.findElement(locator)), 30000);
    await driver.findElement(locator).click(); // Click on the element
}

// Configure log4js for logging
log4js.configure({
    appenders: {
        out: { 
            type: "console",
            layout: { 
                type: "pattern",
                pattern: "%[%p%] - %m"
            }
        }
    },
    categories: { default: { appenders: ["out"], level: "info" } }
});

const logger = log4js.getLogger(); // Initialize the logger

module.exports = { sendKeys, click, logger };
