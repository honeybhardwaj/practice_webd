const main = document.querySelector(".main-image");
const loader = document.querySelector(".loading-dog");
const breedSelect = document.querySelector(".select");

fetch("https://dog.ceo/api/breeds/list/all")
.then(function response(response){
    return response.json();
}).then(function data(data){
    let breedList = Object.keys(data.message);
    let breedOptions="<option></option>";
    for (let i = 0; i < breedList.length; i++) {
        breedOptions += `<option value=${breedList[i]}>${breedList[i]}</option>`;
      }
    
    breedSelect.innerHTML = breedOptions;
    main.classList.add("show");
    loader.classList.remove("show");
    breedSelect.addEventListener("change", function(event){
        handleBreedChange(event.target.value);
    });

    main.addEventListener("load", function() {
    main.classList.add("show");
    loader.classList.remove("show");
  });
})

function handleBreedChange(breed){
    main.classList.remove("show");
    loader.classList.add("show");

    fetch(` https://dog.ceo/api/breed/${breed}/images/random`)
    .then(function res(response){
        return response.json();
    }).then(function data(data){
        main.src = data.message;
    })
}

/*async function init() {
  // populate breed list
  const res = await fetch();
  const resJson = await res.json();

  let breedOptions = "";

  let breedList = Object.keys(resJson.message);

  for (let i = 0; i < breedList.length; i++) {
    breedOptions += `<option value=${breedList[i]}>${breedList[i]}</option>`;
  }

  breedSelect.innerHTML = breedOptions;

  // get first image
  const randomRes = await fetch("https://dog.ceo/api/breeds/image/random");
  const randomResJson = await randomRes.json();

  main.src = randomResJson.message;

  // add event listeners
  breedSelect.addEventListener("change", handleBreedChange);

  main.addEventListener("load", function() {
    main.classList.add("show");
    loader.classList.remove("show");
  });
}

async function handleBreedChange(event) {
  const breed = event.target.value;

  main.classList.remove("show");
  loader.classList.add("show");

  const res = await fetch(` https://dog.ceo/api/breed/${breed}/images/random`);
  const resJson = await res.json();

  main.src = resJson.message;
}

*/