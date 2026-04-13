const API_KEY = ""; // Remplace avec ta clé Giphy
/*
exercice 1 :
const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${API_KEY}`;

async function fetchGifs() {
  try {
    // 🔹 Requête GET
    const response = await fetch(url);

    // 🔹 Vérifier le status HTTP
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }

    // 🔹 Convertir en objet JavaScript
    const data = await response.json();

    // 🔹 Afficher le résultat
    console.log(data);

  } catch (error) {
    // 🔹 Gérer les erreurs
    console.error("Erreur :", error);
  }
}

// 🔹 Appel de la fonction
fetchGifs();
*/
/*exercice 2 :
const url = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=${API_KEY}`;

async function getSunGifs() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error("Erreur :", error);
  }
}

getSunGifs();

exercice 3 :
async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    const data = await response.json();
    console.log(data.result);

  } catch (error) {
    console.error("Error fetching starship:", error);
  }
}

getStarship();
exercice 4 :

calling
Waits 2 seconds

resolved*/