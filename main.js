const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/programmerhumor")
    .then((response) => response.json())
    .then((data) => {
      if (data.url) {
        updateDetails(data.url, data.title, data.author);
      } else {
        memeTitle.innerHTML = "Error: Couldn't fetch meme.";
        memeAuthor.innerHTML = "";
        memeImage.setAttribute("src", "");
      }
    })
    .catch(() => {
      memeTitle.innerHTML = "Failed to fetch meme 😢";
      memeAuthor.innerHTML = "";
      memeImage.setAttribute("src", "");
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

// Load one meme on page load
generateMeme();

