const BASE_URL = "https://api.thecatapi.com/v1";
const BREEDS_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_IMG_URL = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const select = document.querySelector(".breeds");
const catImg = document.querySelector(".cat-img");
const desc = document.querySelector("#description"); //variable to hold description id

// Make Drop Down List of Breed
fetch(BREEDS_URL)
  .then((res) => res.json())
  .then((data) => {
    const breedsArray = data; // Gives Array of Cat Objects

    // Looping through Array of Cat Objects
    for (const breed in breedsArray) {
      const option = document.createElement("option"); // create <option></option>
      option.value = breedsArray[breed].id; // Adds "value=">
      option.innerText = breedsArray[breed].name; // <option value='breed'>BREED</option>
      select.appendChild(option); // Adds current option tag to the select box list of options
    } // End of For Loop

    select.addEventListener("change", (event) => {
      const catBreedId = event.target.value; // gives back 4 letter cat ID
      const selectedImgUrl = CAT_IMG_URL + catBreedId; // url of cat img
      getCatImg(selectedImgUrl); //function to run, to get cat img from api
      const selectedCatInfoObject = breedsArray.find(
        (catBreed) => catBreed.id === catBreedId
      );
      desc.innerText = selectedCatInfoObject.description;
      desc.innerText = breedsArray.find(
        (catBreed) => catBreed.id === catBreedId
      ).description;
      indoorOrOutdoor(selectedCatInfoObject);
    });
  });

const getCatImg = (url) => {
  fetch(url) // fetching from 'selectedImgUrl'
    .then((res) => res.json())
    .then((data) => {
      catImg.src = data[0].url;
    });
};

const indoorOrOutdoor = (selectedCatInfoObject) => {
  console.log(selectedCatInfoObject);
  if (selectedCatInfoObject.indoor === 0) {
    document.querySelector("#indoorOrOutdoor").innerText = "Outdoor";
  } else {
    document.querySelector("#indoorOrOutdoor").innerText = "Indoor";
  }
};
