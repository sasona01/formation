const planets = [
    "Mercure",
    "Vénus",
    "Terre", 
    "Mars",
    "Jupiter",
    "Saturne",
    "Uranus",
    "Neptune"
];

const section = document.querySelector('.listPlanets');

for (let i = 0; i < planets.length; i++) {
    const planetDiv = document.createElement('div');
    
    planetDiv.className = 'planet';
    
    const colors = ['gray', 'orange', 'blue', 'red', 'brown', 'gold', 'lightblue', 'darkblue'];
    planetDiv.style.backgroundColor = colors[i];
    
    planetDiv.textContent = planets[i];
    
    section.appendChild(planetDiv);
}