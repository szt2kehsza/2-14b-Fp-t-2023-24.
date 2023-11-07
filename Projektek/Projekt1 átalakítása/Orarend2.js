document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");
    const closeBtn = document.getElementById("closeBtn");
    const cim = document.getElementById("cim");
    const favcolorInput = document.getElementById("favcolor");
    const fontStyleSelector = document.getElementById("font-style-selector");
    const darkModeButton = document.getElementById("DarkMode");
    
    const root = document.documentElement;

    const mentesBtn = document.getElementById("mentesBtn");

    const hknDiv = document.getElementById("hkn");
    const hvDiv = document.getElementById("hv");

    const data = {
        szovegszine: "black",
        fontstyle: "Arial",
        darkMode: false,
    };

    const idopontok = {
        elso: "8:00",
        masodik: "8:55 ",
        harmadik: "9:55",
        negyedik: "10:50",
        otodik: "11:45",
        hatodik: "12:45",
        hetedik: "13:40",
    }

    const tantargyak = {
        elso: "Matek",
        masodik: "Tesi",
        harmadik: "Angol",
        negyedik: "Fizika",
        otodik: "Kémia",
        hatodik: "Magyar",
        hetedik: "Töri",
    };

    const napok = {
        hetfo: "Hétfő",
        kedd: "Kedd",
        szerda: "Szerda",
        csutortok: "Csütörtök",
        pentek: "Péntek",
    };

    function DarkModeChange() {
        root.style.setProperty("--szovegszine", data.szovegszine);
        if (data.darkMode) {
            root.style.setProperty("--kartyakhatterszine", "black");
            root.style.setProperty("--szovegszine", "white");
            root.style.setProperty("--atlatszohattersotetm", "rgba(0, 0, 0, 0.5)");
            darkModeButton.style.backgroundImage = "url(Sun.png)";
        } else {
            root.style.setProperty("--kartyakhatterszine", "white");
            root.style.setProperty("--szovegszine", "black");
            root.style.setProperty("--atlatszohattersotetm", "rgba(255, 255, 255, 0.5)");
            darkModeButton.style.backgroundImage = "url(cartoon-moon-icon.png)";
        }
    }

    function loadStorageEllenorzes() {
        const storedData = localStorage.getItem("projectData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            Object.assign(data, parsedData);
        }
    }

    function adatHozzaadasa() {
        const selectedColor = favcolorInput.value;
        data.szovegszine = selectedColor;

        generateHTML();
    }

    function adatTorle() {
        data.szovegszine = "black";
        data.fontstyle = "Arial";
        blackWhiteModMentesALocalStoragebe();
        DarkModeChange();
    }

    function blackWhiteModValtas() {
        data.darkMode = !data.darkMode;
        blackWhiteModMentesALocalStoragebe();
        DarkModeChange();
    }

    function blackWhiteModMentesALocalStoragebe() {
        localStorage.setItem("projectData", JSON.stringify(data));
    }

    function blackWhiteModBeallitasALocalStoragebol() {
        loadStorageEllenorzes();
    }

    function localStorageInicializalas() {
        blackWhiteModBeallitasALocalStoragebol();
        DarkModeChange();
    }

    menuIcon.addEventListener("click", function () {
        menu.style.display = "block";
        cim.style.display = "none";
    });

    closeBtn.addEventListener("click", function () {
        menu.style.display = "none";
        cim.style.display = "block";
    });

    darkModeButton.addEventListener("click", function () {
        blackWhiteModValtas();
        blackWhiteModMentesALocalStoragebe();
        DarkModeChange();
    });


    function generateHTML() {
        for (let nap in napok) {
            const napDiv = document.createElement("div");
            napDiv.classList.add("hknnapok");
            hknDiv.appendChild(napDiv);

            const napNev = document.createElement("div");
            napNev.classList.add("napok");
            napNev.textContent = napok[nap];
            napDiv.appendChild(napNev);

            for (let idopont in idopontok) {
                const idopontDiv = document.createElement("div");
                idopontDiv.classList.add("orak");
                idopontDiv.innerHTML = `${idopontok[idopont]}<br>${tantargyak[idopont]}`;
                napDiv.appendChild(idopontDiv);
            }
        }
    }

    mentesBtn.addEventListener("click", function () {
        const selectedColor = favcolorInput.value;
        const selectedFont = fontstyleSelector.value;
        data.szovegszine = selectedColor;
        data.fontstyle = selectedFont;
        generateHTML();
    });

    generateHTML();
    localStorageInicializalas();


});