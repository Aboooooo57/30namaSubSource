# Movie Subtitle Search Chrome Extension

This Chrome extension adds a "Search Subtitle" button next to the "دانلود" button on the movie detail page of [30nama.com](https://www.30nama.com). It allows you to quickly search for subtitles on [SubSource](https://subsource.net) by extracting the movie name from the page.

## Features
- Automatically extracts the movie name from the page.
- Adds a "Search Subtitle" button next to the "دانلود" button on the movie detail page.
- Redirects to SubSource for subtitle search.

## Installation

### Step 1: Clone or Download the Repository
Download the extension files and place them in a folder on your computer.

### Step 2: Load the Extension in Chrome
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" at the top right.
3. Click "Load unpacked".
4. Select the folder containing the extension files.

### Step 3: Reload the Extension
After loading the extension, click the reload button in `chrome://extensions/` to apply any changes.

## How It Works

- The extension looks for a movie's title inside an `h2` tag with class `h2 title` and `data-v-71cd868e`.
- It then adds a button labeled "Search Subtitle" next to the "دانلود" button.
- Clicking the "Search Subtitle" button opens a new tab with a search URL to [SubSource](https://subsource.net).

## Files

- `manifest.json`: The configuration file for the Chrome extension.
- `background.js`: Background script (if necessary).
- `content.js`: Content script that interacts with the page and adds the search button.
- Icon files: Icons in various sizes (16x16, 48x48, 128x128).

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Feel free to open issues or pull requests if you'd like to contribute to the project.