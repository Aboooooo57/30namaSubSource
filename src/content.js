
const addSearchButtonNextToDownload = () => {
  console.log("Checking for download button container...");
  const downloadContainer = document.querySelector('div.buttons.figcaption-child[data-v-71cd868e]');

  if (downloadContainer) {
    console.log("Download button container found:", downloadContainer);
    if (downloadContainer.querySelector('.search-subtitle-button')) {
      console.log("Search button already exists. Skipping...");
      return;
    }

    const searchButton = document.createElement('button');
    searchButton.textContent = "زیرنویس subsource";
    searchButton.className = "search-subtitle-button";
    searchButton.style.cssText = `
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 5px 10px;
      margin-left: 10px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
      display: inline-block;
      radius: 4px;
    `;

    searchButton.addEventListener('click', () => {
      const titleElement = document.querySelector('h2[data-v-71cd868e][class="h2 title"]');
      if (titleElement) {
        const movieName = titleElement.textContent.trim();
        console.log("Extracted movie name:", movieName);

        const searchUrl = `https://subsource.net/search/${encodeURI(movieName)}`;
        window.open(searchUrl, '_blank');
      } else {
        console.error("Title element not found. Unable to extract movie name.");
      }
    });
    downloadContainer.appendChild(searchButton);
  } else {
    console.log("Download button container not found.");
  }
};

const observeDownloadContainer = () => {
  const targetNode = document.body;

  const observer = new MutationObserver(() => {
    addSearchButtonNextToDownload();
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });

};

observeDownloadContainer();
