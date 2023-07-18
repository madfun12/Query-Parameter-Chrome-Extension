const setIcon = (iconName) => {
    // Set the extension's icon
    chrome.action.setIcon({
        path: {
            16: iconName,
            48: iconName,
            128: iconName,
        },
    });
};

chrome.action.onClicked.addListener(async (tab) => {
    const url = new URL(tab.url);
    const useLocalTheme = url.searchParams.get("useLocalTheme");

    // Update the value of the 'useLocalTheme' parameter
    if (useLocalTheme === "true") {
        url.searchParams.set("useLocalTheme", "false");
        setIcon("icon-off.png");
    } else {
        url.searchParams.set("useLocalTheme", "true");
        setIcon("icon-on.png");
    }

    const updatedURL = url.href;

    chrome.tabs.update(tab.id, { url: updatedURL });
});
