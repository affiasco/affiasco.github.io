const ALL_DOG_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds")
const displayDoggos = document.querySelector(".display-doggos")
const img = document.querySelector("img");

function populateDropdown() {
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
  fetch(imageUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      updateImage(data.message);
    })
  
}

function showLoadSpinner(){
};

function updateImage(imageUrl){
  img.src = imageUrl;
  img.alt = "Cute doggo";
  displayDoggos.replaceWith(img);
}
  
  // make url
  // show loading spinner
  // fetch from api
  // use url to change current image
  // stop showing loading spinner

populateDropdown();
showLoadSpinner();

