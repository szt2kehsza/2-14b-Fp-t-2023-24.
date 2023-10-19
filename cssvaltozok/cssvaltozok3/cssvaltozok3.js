
const root = document.querySelector(':root')
const rootStyle = getComputedStyle(root)                                 
        
function colorchange() {
    const selectedColor = document.getElementById("favcolor").value;
    const divNumber = parseInt(document.getElementById("divNumber").value);

    if (divNumber >= 1 && divNumber <= 8) {
        const selectedDivId = getDivIdByNumber(divNumber);
        const selectedDiv = document.getElementById(selectedDivId);

        if (selectedDiv) {
            selectedDiv.style.backgroundColor = selectedColor;
            root.style.setProperty('--' + selectedDivId, selectedColor);
            
        }
    } else {
        console.log('Érvénytelen div sorszám.');
    }
}

function getDivIdByNumber(divNumber) {
    switch (divNumber) {
        case 1: return 'lila';
        case 2: return 'vilagoskek';
        case 3: return 'cyan';
        case 4: return 'sotetkek';
        case 5: return 'bordo';
        case 6: return 'rozsaszin';
        case 7: return 'sotetlila';
        case 8: return 'narancs';
        default: return null;
    }
}

