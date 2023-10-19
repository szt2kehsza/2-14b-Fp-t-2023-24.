const heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Luke", lastName: "Skywalker", job: "jedi mester"},
    {firstName: "Rey", lastName: "Palpatine", job: "jedi tanonc"}
  ];
  
  function renderHeroes(heroes) {
    const container = document.getElementById("heroes-container");
    container.innerHTML = "";
    
    heroes.forEach(hero => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${hero.firstName} ${hero.lastName}</h2>
        <p>${hero.job}</p>
      `;
      container.appendChild(card);
    });
  }
    renderHeroes(heroes);