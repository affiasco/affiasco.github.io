const ALL_DOG_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds")
const displayDoggos = document.querySelector(".display-doggos")
const img = document.querySelector("img");
const spinner = document.querySelector(".loading-dog");

function init() {
  fetch(ALL_DOG_BREEDS_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const breedsArray = Object.keys(data.message)
      updateDropdown(breedsArray);
    })
};

function updateDropdown(breedsArray) {
  for (let i = 0; i < breedsArray.length; i++){
    const option = document.createElement("option");
    option.value = breedsArray[i];
    option.innerText = breedsArray[i];
    select.appendChild(option)
  }
}

select.addEventListener("change", (event) => changeImage(event.target.value));

function changeImage(breed) {
  const imageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
  showLoadSpinner();
  fetch(imageUrl)
  .then(response => response.json())
  .then(function(data) {
    updateImage(data.message);
  })
  
}

function showLoadSpinner(){
  img.classList.add("hidden")
  spinner.classList.remove("hidden")
  spinner.classList.add("spin");
};

function removeLoadSpinner(){
  spinner.classList.remove("spin");
  spinner.classList.add("hidden");
  img.classList.remove("hidden")
}

function updateImage(imageUrl){
  removeLoadSpinner();
  img.src = imageUrl;
  img.alt = "Cute doggo";
  img.replaceWith(img);
}
  
init();

