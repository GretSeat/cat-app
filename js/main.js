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
      desc.innerText = selectedCatInfoObject.description; // Add Description to the Description Object
      likesKids(selectedCatInfoObject);
      likesDogs(selectedCatInfoObject);
      console.log(selectedCatInfoObject);
    });
  });

function getCatImg(url) {
  fetch(url) // fetching from 'selectedImgUrl'
    .then((res) => res.json())
    .then((data) => {
      catImg.src = data[0].url;
    });
}

const likesKids = (selectedCatInfoObject) => {
  switch (selectedCatInfoObject.child_friendly) {
    case 1:
      document.querySelector("#likesKids").innerText =
        "I will probably eat your kids";
      break;
    case 2:
      document.querySelector("#likesKids").innerText =
        "Probably shouldn't be around Children";
      break;
    case 3:
      document.querySelector("#likesKids").innerText =
        "Is Okay around Children";
      break;
    case 4:
      document.querySelector("#likesKids").innerText =
        "Does Great with Children";
      break;
    default:
      document.querySelector("#likesKids").innerText = "Purrrfect for Kids!";
  }
};

const likesDogs = (selectedCatInfoObject) => {
  switch (selectedCatInfoObject.dog_friendly) {
    case 1:
      document.querySelector("#likesDogs").innerText = "I hate dogs";
      break;
    case 2:
      document.querySelector("#likesDogs").innerText =
        "Yeah, no, dogs aren't my thing";
      break;
    case 3:
      document.querySelector("#likesDogs").innerText = "Dogs are meh";
      break;
    case 4:
      document.querySelector("#likesDogs").innerText =
        "Might be friends with your dog";
      break;
    default:
      document.querySelector("#likesDogs").innerText = "A Dog's Best Friend!";
  }
};
