const button = document.getElementById('Random');
const waifuImage = document.getElementById('holywaifuimage');

button.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.waifu.pics/sfw/waifu');
    const data = await response.json();

    waifuImage.src = data.url;
    waifuImage.style.display = 'block';
    waifuImage.style.width = "300px";
    waifuImage.style.height = "auto"
} catch (error) {
    console.error('Error Getting The Waifu Image:', error);
  }
});
