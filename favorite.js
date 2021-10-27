let arr =  JSON.parse(localStorage.getItem("favorite")) || []


let favorite = arr.filter(item => item.favourite)

const cards = document.querySelector(".cards")


const render = () => {
    cards.innerHTML = ""
    favorite.forEach((practice, i) => {
        cards.innerHTML += `<div class="card">
          <h2 class="exc">${practice.name}</h2>
          <img src="${practice.img}" alt="img" width="300" height="300" id="img1">
          <div class="btns">
          <button class="but" onclick = 'showItem(${i})'>  Show More </button>
          <button id="button" onclick = 'addToFavorite(${i})'><i class="${practice.favourite ? "fas fa-heart" : "far fa-heart"}"></i></button>
          </div>
      </div>`;
    });
  
  };
  
  render();