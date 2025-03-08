const { By } = require("selenium-webdriver");
const { logger, sendKeys, click } = require("./shared.js");

async function login(driver, email, password) {
    /**
     * Automates the login process for the Talana platform.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {string} email User's email address for login.
     * @param {string} password User's password for login.
     */
    
    // Start the login process
    logger.info("Starting login process.");
    
    const talanaUrl = "https://peru.talana.com/es/remuneraciones/"; // Talana URL
    logger.info("Navigating to the Talana login page.");
    await driver.get(talanaUrl); // Access the Talana URL
    logger.info("Successfully entered the Talana login page.");
    
    await fillUserInput(driver, email); // Call the function to enter the user email
    await fillPasswordInput(driver, password); // Call the function to enter the user password
    await clickLoginButton(driver); // Call the function to press the login button
    
    await driver.sleep(15000); // Wait for the page to load
    logger.info("Login process finished successfully.");
}

async function fillUserInput(driver, email) {
    /**
     * Enters the user's email into the login input field.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {string} email User's email address to be entered.
     */
    
    // Enter the user email in the corresponding field
    logger.info("Entering the user email.");
    
    await sendKeys(driver, By.css('input[data-cy="talana-user-input"]'), email); // Send the user email to the corresponding field
    
    logger.info("User email entered successfully.");
}

async function fillPasswordInput(driver, password) {
    /**
     * Enters the user's password into the login input field.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     * @param {string} password User's password to be entered.
     */
    
    // Enter the user password in the corresponding field
    logger.info("Entering the user password.");
    
    await sendKeys(driver, By.css('input[data-cy="talana-password-input"]'), password); // Send the user password to the corresponding field
    
    logger.info("User password entered successfully.");
}

async function clickLoginButton(driver) {
    /**
     * Clicks the login button to submit the credentials.
     *
     * @param {WebDriver} driver WebDriver instance used to interact with the web page.
     */
    
    // Click the login button
    logger.info("Clicking the login button.");
    
    await click(driver, By.css('button[data-cy="talana-login-button"]')); // Click the login button
    
    logger.info("Login button clicked successfully.");
}

module.exports = { login };
