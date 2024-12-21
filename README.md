# Baiscope Auto Downloader

## Overview
Baiscope Auto Downloader is a user-friendly script designed for [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/) users. It streamlines your experience on [Baiscope.lk](https://www.baiscope.lk/) by automating file downloads and offering quick access to links on the page.

## Features

### Auto Download Toggle
- **Compact Toggle Button**: Displays an "ON/OFF" toggle in the top-right corner.
- **Persistent State**: Remembers your preference (enabled/disabled) using `localStorage`.
- **Visual Indicator**: Green for "ON" and red for "OFF".

### Quick Open Links
- **Link Opener Button**: Small button (⬇️) below the toggle.
- **Bulk Action**: Opens all URLs found within `<td>` elements in new tabs.

## Installation

1. **Install a Userscript Manager**:
   - Install [Violentmonkey](https://violentmonkey.github.io/) or [Tampermonkey](https://www.tampermonkey.net/) in your browser.

2. **Add the Script**:
   - Copy the script from the [Baiscope Auto Downloader Script](./baiscope-downloader.user.js).
   - Create a new script in your userscript manager and paste the copied code.

3. **Save and Activate**:
   - Save the script and ensure it is enabled.

## Usage

1. **Visit Baiscope.lk**:
   - Navigate to [Baiscope.lk](https://www.baiscope.lk/).

2. **Enable/Disable Auto Download**:
   - Use the "ON/OFF" toggle to activate or deactivate automatic downloads.

3. **Open Links in New Tabs**:
   - Click the ⬇️ button to open all `<td>` links in new tabs.

## How It Works

### Auto Download
When enabled, the script scans the page for download links matching the pattern `/Downloads/.*?/.*?` and automatically downloads the file.

### Quick Open Links
The ⬇️ button identifies all links in `<td>` elements on the page and opens them in new tabs, making navigation seamless.

## Script Details

- **Name**: Baiscope Auto Downloader
- **Version**: 1.2
- **Compatibility**: Violentmonkey/Tampermonkey
- **Target Site**: [Baiscope.lk](https://www.baiscope.lk/)

