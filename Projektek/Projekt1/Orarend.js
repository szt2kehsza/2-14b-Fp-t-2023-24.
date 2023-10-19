
var darkMode = false; 

function DarkModeChange() {
    var button = document.getElementById('DarkMode');
    if (darkMode) {
        document.documentElement.style.setProperty('--kartyakhatterszine', 'white');
        document.documentElement.style.setProperty('--szovegszine', 'black');
        document.documentElement.style.setProperty('--atlatszohattersotetm', 'rgba(255, 255, 255, 0.5)');
        button.style.backgroundImage = "url(cartoon-moon-icon.png)";
        darkMode = false; 
    } else {
        document.documentElement.style.setProperty('--kartyakhatterszine', 'black');
        document.documentElement.style.setProperty('--szovegszine', 'white');
        document.documentElement.style.setProperty('--atlatszohattersotetm', 'rgba(0, 0, 0, 0.5)');
        button.style.backgroundImage = "url(Sun.png)";
        darkMode = true; 
        
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");
    const closeBtn = document.getElementById("closeBtn");
    const cim = document.getElementById("cim");

    menuIcon.addEventListener("click", function() {
        menu.style.display = "block";
        cim.style.display = "none"; 
    });

    closeBtn.addEventListener("click", function() {
        menu.style.display = "none";
        cim.style.display = "block";
    });
});

const root = document.querySelector(':root')

function Onchange(){
    //szin
    const selectedColor = document.getElementById("favcolor").value;
    root.style.setProperty('--szovegszine', selectedColor);
    
    //tipus
    var fontSelector = document.getElementById("font-style-selector");
    var selectedFontIndex = fontSelector.selectedIndex; 
    var selectedFont = fontSelector.options[selectedFontIndex].text; 
    document.body.style.fontFamily = selectedFont;
    var orakElemek = document.getElementsByClassName('orak');

    for (var i = 0; i < orakElemek.length; i++) {
        orakElemek[i].style.fontFamily = selectedFont;
    }

}


