const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const container = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch random GIF
async function fetchGif(category) {
  const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    const data = await response.json();

    // Get GIF URL
    const gifUrl = data.data.images.original.url;

    displayGif(gifUrl);

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Display GIF + DELETE button
function displayGif(url) {
  const wrapper = document.createElement("div");

  const img = document.createElement("img");
  img.src = url;
  img.style.width = "200px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";

  deleteBtn.addEventListener("click", () => {
    wrapper.remove();
  });

  wrapper.appendChild(img);
  wrapper.appendChild(deleteBtn);

  container.appendChild(wrapper);
}

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = input.value.trim();

  if (category) {
    fetchGif(category);
    input.value = "";
  }
});

// Delete all GIFs
deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = "";
});