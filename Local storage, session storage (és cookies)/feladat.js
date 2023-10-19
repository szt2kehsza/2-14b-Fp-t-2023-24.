const storageTypeSelector = document.getElementById("storageType");
const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
const saveDataButton = document.getElementById("saveData");
const displayDataDiv = document.getElementById("displayData");
const clearLocalStorageButton = document.getElementById("clearLocalStorage");
const clearSessionStorageButton = document.getElementById("clearSessionStorage");

saveDataButton.addEventListener("click", () => {
    const storageType = storageTypeSelector.value;
    const key = keyInput.value;
    const value = valueInput.value;

    if (storageType === "localStorage") {
        localStorage.setItem(key, value);
    } else if (storageType === "sessionStorage") {
        sessionStorage.setItem(key, value);
    }

    keyInput.value = "";
    valueInput.value = "";

    displayData();
});

function displayData() {
    displayDataDiv.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        displayDataDiv.innerHTML += `<p>${key}: ${value}</p>`;
    }
}

clearLocalStorageButton.addEventListener("click", () => {
    localStorage.clear();
    displayData();
});

clearSessionStorageButton.addEventListener("click", () => {
    sessionStorage.clear();
    displayData();
});

displayData();
