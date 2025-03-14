# 3x Video Speed Extension

## Overview
The **3x Video Speed** extension allows users to automatically play videos at 3x speed on any website. It works by detecting video elements on a webpage and adjusting their playback speed accordingly.

## Features
- Automatically sets video playback speed to **3x**.
- Works on **all websites** with HTML5 video elements.
- Includes a **popup UI** to manually trigger the speed change.
- Supports dynamically loaded videos using a **MutationObserver**.

## Installation
1. Download or clone this repository.
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle at the top-right corner).
4. Click **Load unpacked** and select the project folder.
5. The extension will now be installed and active.

## Usage
- The extension runs automatically in the background and sets all video speeds to **3x**.
- Click the extension icon to manually trigger the speed adjustment.
- If a site loads new videos dynamically, the extension will detect them and adjust their speed.

## Files & Structure
- `manifest.json` – Configuration file for the Chrome extension.
- `content.js` – Main script that adjusts video playback speed.
- `background.js` – Background script for handling extension events.
- `popup.html` – User interface for the popup menu.
- `popup.js` – Script for popup interactions.
- `icon.png` – Extension icon.

## Future Enhancements
- Allow users to **customize playback speed**.
- Support for **specific video platforms** with additional controls.
- Add an **options page** for persistent user settings.

## License
This project is open-source and available under the **MIT License**.

## Contributions
Feel free to submit issues, feature requests, or pull requests to improve this extension!
