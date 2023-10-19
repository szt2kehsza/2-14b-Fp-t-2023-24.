const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)                                  
const color1 = rootStyle.getPropertyValue('--lila');
const color2 = rootStyle.getPropertyValue('--vilagoskek');
const color3 = rootStyle.getPropertyValue('--cyan');
const color4 = rootStyle.getPropertyValue('--sotetkek');
const color5 = rootStyle.getPropertyValue('--bordo');
const color6 = rootStyle.getPropertyValue('--rozsaszin');
const color7 = rootStyle.getPropertyValue('--sotetlila');
const color8 = rootStyle.getPropertyValue('--narancs');               
  

let selectedDivId; 

function selectDiv(divId) {
    selectedDivId = divId;
    console.log('Kiválasztott div: ' + divId);
}

function colorchange() {
    if (selectedDivId) {
        const selectedColor = document.getElementById("favcolor").value;
        const selectedDiv = document.getElementById(selectedDivId);

        if (selectedDiv) {
            selectedDiv.style.backgroundColor = selectedColor;
            root.style.setProperty('--' + selectedDivId, selectedColor);
        }
    }
}