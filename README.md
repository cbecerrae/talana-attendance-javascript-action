# Talana Attendance JavaScript Action

This GitHub Action automates attendance marking on the [Talana](https://peru.talana.com/es-pe/remuneraciones/login-vue#/) platform using JavaScript, Node.js, and Selenium. It runs on a schedule, logging in and marking attendance as "In" or "Out" based on the time, leveraging Selenium to interact with the platform. The action ensures seamless, automated attendance marking.

## Requirements

To use this action, you need *Google Chrome* and *ChromeDriver* installed on the runner. You can install them using the [setup-chrome](https://github.com/browser-actions/setup-chrome) GitHub Action. This action automatically provides the necessary paths to the Chrome and ChromeDriver binaries. These paths should be passed as inputs (`chrome_path` and `chromedriver_path`) to the **talana-attendance-javascript-action** GitHub Action.

## Inputs

### `attendance_email`

**Required** User email for authentication.

### `attendance_password`

**Required** User password for authentication.

### `attendance_type`

**Required** Attendance type: In or Out.

### `chrome_path`

**Required** Path to the installed Chrome binary.

### `chromedriver_path`

**Required** Path to the installed ChromeDriver binary.

## Outputs

### `attendance_time`

The time when the attendance was marked.

## Usage

```yaml
uses: cbecerrae/talana-attendance-javascript-action@v1
with:
    attendance_email: 'user@example.com'
    attendance_password: 'password123'
    attendance_type: 'In'
    chrome_path: '/path/to/chrome'
    chromedriver_path: '/path/to/chromedriver'
```

## GitHub Action Workflow Example 

[![Schedule Attendance Marking](https://github.com/cbecerrae/talana-attendance-javascript-action/actions/workflows/schedule-attendance.yml/badge.svg)](https://github.com/cbecerrae/talana-attendance-javascript-action/actions/workflows/schedule-attendance.yml)

For a full example of how to implement this action alongside **setup-chrome**, check the [`.github/workflows/schedule-attendance.yml`](.github/workflows/schedule-attendance.yml) file. This example demonstrates how to schedule attendance marking and provides a working setup for using this action in combination with the **setup-chrome** action.