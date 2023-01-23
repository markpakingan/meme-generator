const form = document.querySelector("#memeform");
const button = document.querySelector("#submitBotton");
const imageHolder = document.querySelector("#imageHolder");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const topText = document.querySelector("#topText");
    const bottomText = document.querySelector("#bottomText");
    const newDiv = document.createElement("div");
    const divBottomText = document.createElement("div");
    const divTopText = document.createElement("div");
    const newImage = document.createElement("img");
    const url = document.querySelector("#url");

    imageHolder.appendChild(newDiv);

    newDiv.appendChild(divTopText);
    newDiv.appendChild(divBottomText);
    newDiv.appendChild(newImage);

    divTopText.innerText = topText.value;
    divBottomText.innerText = bottomText.value;
    newImage.src = url.value;

    topText.value = "";
    bottomText.value = "";
    url.value = "";

    divTopText.className = "topCaption";
    divBottomText.className = "bottomCaption";
    newDiv.className = "container";
});

imageHolder.addEventListener("click", function (e) {
    const selectedPhoto = e.target.parentElement;
    if (selectedPhoto.className === "container") {
        selectedPhoto.remove();
    }
});
