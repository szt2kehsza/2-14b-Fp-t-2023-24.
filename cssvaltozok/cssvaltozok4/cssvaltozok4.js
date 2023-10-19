function Onchange(){
    const magassag = parseInt(document.getElementById("magassag").value);
    const szelesseg = parseInt(document.getElementById("szelesseg").value);
    
    const divs = document.getElementsByClassName('items');
    
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.height = magassag + 'px';
        divs[i].style.width = szelesseg + 'px';
    }

}