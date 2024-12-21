// ==UserScript==
// @name         Baiscope Auto Downloader
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Automatically find and download files from Baiscope.lk with a compact toggle button
// @author       Your Name
// @match        https://www.baiscope.lk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Initialize toggle state from localStorage
    const TOGGLE_KEY = 'autoDownloaderToggle';
    let isAutoDownloadOn = localStorage.getItem(TOGGLE_KEY) === 'true';

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = isAutoDownloadOn ? 'ON' : 'OFF';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.zIndex = '1000';
    toggleButton.style.padding = '5px';
    toggleButton.style.backgroundColor = isAutoDownloadOn ? 'green' : 'red';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';

    // Append the toggle button to the document
    document.body.appendChild(toggleButton);

    // Create the download button
    const downloadButton = document.createElement('button');
    downloadButton.textContent = '\u2193'; // Down arrow
    downloadButton.style.position = 'fixed';
    downloadButton.style.top = '40px';
    downloadButton.style.right = '10px';
    downloadButton.style.zIndex = '1000';
    downloadButton.style.padding = '5px';
    downloadButton.style.backgroundColor = '#333';
    downloadButton.style.color = 'white';
    downloadButton.style.border = 'none';
    downloadButton.style.cursor = 'pointer';

    // Append the download button to the document
    document.body.appendChild(downloadButton);

    // Toggle button click event
    toggleButton.addEventListener('click', () => {
        isAutoDownloadOn = !isAutoDownloadOn;
        localStorage.setItem(TOGGLE_KEY, isAutoDownloadOn);
        toggleButton.textContent = isAutoDownloadOn ? 'ON' : 'OFF';
        toggleButton.style.backgroundColor = isAutoDownloadOn ? 'green' : 'red';
    });

    // Download button click event
    downloadButton.addEventListener('click', () => {
        const tdLinks = document.querySelectorAll('td a');
        tdLinks.forEach(link => {
            if (link.href) {
                window.open(link.href, '_blank');
            }
        });
    });

    // Function to find the download link
    function findDownloadLink() {
        const links = document.querySelectorAll('a');
        for (let link of links) {
            if (/\/Downloads\/.*?\/.*?/.test(link.href)) {
                return link.href;
            }
        }
        return null;
    }

    // Function to download the file
    function downloadFile(url) {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = '';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    // Main logic
    if (isAutoDownloadOn) {
        const downloadLink = findDownloadLink();
        if (downloadLink) {
            console.log('Download link found:', downloadLink);
            downloadFile(downloadLink);
        } else {
            console.log('No download link found on this page.');
        }
    }
})();
