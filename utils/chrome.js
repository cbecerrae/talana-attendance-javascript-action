const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

function getDriver(chromePath, chromedriverPath) {
    /**
     * Initializes and configures a Chrome WebDriver instance with specific options.
     *
     * The function sets various Chrome options to optimize performance, prevent 
     * automation detection, and ensure compatibility with different environments.
     *
     * @param {string} chromePath The path to the Chrome binary.
     * @param {string} chromedriverPath The path to the ChromeDriver binary.
     * @return {WebDriver} An instance of the Chrome WebDriver with predefined configurations.
     */
    
    // Initializes the Chrome browser options
    let options = new chrome.Options();

    // Prevents automation detection by websites
    options.addArguments('--disable-blink-features=AutomationControlled');

    // Runs the browser in headless mode (without a graphical interface)
    options.addArguments('--headless=new');

    // Launches the browser in maximized mode
    options.addArguments('--start-maximized');

    // Defines the window size to ensure all elements are visible
    options.addArguments('--window-size=1920,1080');

    // Reduces the verbosity of the browser logs to errors
    options.addArguments('--log-level=3');

    // Changes the user-agent to simulate a standard browser and avoid bot blocking
    options.addArguments('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36');

    // Configuration to avoid errors in non-sandboxed environments
    options.addArguments('--no-sandbox');

    // Reduces shared memory usage in the system (avoids certain errors on resource-limited systems)
    options.addArguments('--disable-dev-shm-usage');

    // Explicitly set Chrome binary path
    options.setChromeBinaryPath(chromePath);

    // Sets the path to the ChromeDriver executable
    const service = new chrome.ServiceBuilder(chromedriverPath).build();

    // Returns an instance of the Chrome driver with the configured options
    return chrome.Driver.createSession(options, service)
    // return new Builder()
    //     .forBrowser('chrome')
    //     .setChromeOptions(options)
    //     .build();
}

module.exports = { getDriver };
